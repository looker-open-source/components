/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen, fireEvent } from '@testing-library/react'
import { DataTableAction, DataTableItem } from '../Item'
import type { DataTableColumns } from '../Column'
import { DataTableCell } from '../Column'
import { DataTable } from '../DataTable'
import { useSelectManager } from './useSelectManager'

describe('useSelectManager', () => {
  const data = [
    {
      id: 1,
      name: 'Gorgonzola',
    },
    {
      id: 2,
      name: 'Cheddar',
    },
    {
      id: 3,
      name: `Blue`,
    },
  ]

  const columns: DataTableColumns = [
    {
      id: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      id: 'name',
      title: 'Name',
      type: 'string',
    },
  ]

  type TestProps = { defaultSelected?: string[] }

  const Test = ({ defaultSelected }: TestProps) => {
    const allSelectableItems = data.map(({ id }) => String(id))

    const { onSelect, onSelectAll, selections } = useSelectManager(
      allSelectableItems,
      defaultSelected
    )

    const items = data.map(({ id, name }) => (
      <DataTableItem
        id={String(id)}
        key={id}
        onClick={() => alert(`${name} clicked`)}
        actions={
          <>
            <DataTableAction onClick={() => alert(`${name} deleted`)}>
              Delete
            </DataTableAction>
          </>
        }
      >
        <DataTableCell>{id}</DataTableCell>
        <DataTableCell>{name}</DataTableCell>
      </DataTableItem>
    ))

    return (
      <DataTable
        caption="Cheeses example"
        columns={columns}
        select={{
          onSelect,
          onSelectAll,
          pageItems: allSelectableItems,
          selectedItems: selections,
        }}
      >
        {items}
      </DataTable>
    )
  }

  test('returns a DataTable', () => {
    renderWithTheme(<Test />)
    expect(screen.getByText('ID')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()

    expect(screen.getByText('Gorgonzola')).toBeInTheDocument()
    expect(screen.getByText('Cheddar')).toBeInTheDocument()
    expect(screen.getByText('Blue')).toBeInTheDocument()
  })

  test('selects all checkbox', () => {
    renderWithTheme(<Test />)
    const checkbox = screen.getAllByRole('checkbox')
    expect(checkbox[0]).toBeInTheDocument()
    expect(checkbox[0]).toHaveAttribute('aria-checked', 'false')
    fireEvent.click(checkbox[0])
    expect(checkbox[0]).toHaveAttribute('aria-checked', 'true')
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'true')
  })

  test('clicking the header deselects all when a mixed selection exists', () => {
    renderWithTheme(<Test defaultSelected={['2', '3']} />)
    const checkbox = screen.getAllByRole('checkbox')
    expect(checkbox[0]).toHaveAttribute('aria-checked', 'mixed') // header
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'false')
    expect(checkbox[2]).toHaveAttribute('aria-checked', 'true')
    expect(checkbox[3]).toHaveAttribute('aria-checked', 'true')

    fireEvent.click(checkbox[0]) // unselect all
    expect(checkbox[0]).toHaveAttribute('aria-checked', 'false')
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'false')
    expect(checkbox[2]).toHaveAttribute('aria-checked', 'false')
    expect(checkbox[3]).toHaveAttribute('aria-checked', 'false')
  })

  test('toggles mixed checkbox state in header', () => {
    renderWithTheme(<Test defaultSelected={['2']} />)
    const checkbox = screen.getAllByRole('checkbox')
    expect(checkbox[0]).toHaveAttribute('aria-checked', 'mixed') // header
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'false')
    expect(checkbox[2]).toHaveAttribute('aria-checked', 'true') // default selected
    expect(checkbox[3]).toHaveAttribute('aria-checked', 'false')

    fireEvent.click(checkbox[2]) // unselect default option
    expect(checkbox[0]).toHaveAttribute('aria-checked', 'false') // header
    expect(checkbox[2]).toHaveAttribute('aria-checked', 'false')
  })

  test('selects individual checkbox', () => {
    renderWithTheme(<Test />)
    const checkbox = screen.getAllByRole('checkbox')
    expect(checkbox[1]).toBeInTheDocument()
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'false')
    fireEvent.click(checkbox[1])
    expect(checkbox[1]).toHaveAttribute('aria-checked', 'true')
    expect(checkbox[2]).toHaveAttribute('aria-checked', 'false')
    expect(checkbox[3]).toHaveAttribute('aria-checked', 'false')
  })
})
