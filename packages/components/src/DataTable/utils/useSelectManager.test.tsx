/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import { screen } from '@testing-library/react'
import { DataTableItem } from '../Item/DataTableItem'
import { DataTableAction } from '../Item/DataTableAction'
import { DataTableCell, DataTableColumns } from '../Column'
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

  const Test = () => {
    const allSelectableItems = data.map(({ id }) => String(id))

    const { onSelect, onSelectAll, selections } = useSelectManager(
      allSelectableItems
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
})
