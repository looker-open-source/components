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
import { DataTableAction } from '../Item/DataTableAction'
import type { DataTableColumns } from '../Column'
import { Link } from '../../Link'
import { useDataTableSortManager } from './useDataTableSortManager'

describe('useDataTableSortManager', () => {
  const actions = () => (
    <>
      <DataTableAction onClick={() => alert(`Ordered!!`)}>
        Order
      </DataTableAction>
      <DataTableAction onClick={() => alert('Mmmm...')}>
        Make Grilled Cheese
      </DataTableAction>
      <DataTableAction onClick={() => alert('Delete')}>Delete</DataTableAction>
    </>
  )

  const columns: DataTableColumns = [
    {
      hide: true,
      id: 'calories',
      title: 'Calories',
      type: 'number',
    },
    {
      canSort: true,
      id: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      canSort: true,
      id: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      canSort: true,
      id: 'type',
      title: 'Type',
      type: 'string',
    },
  ]

  const data = [
    {
      calories: 101,
      id: 1,
      name: 'Cheddar',
      type: 'hard, artisan, processed',
    },
    {
      calories: 102,
      id: 2,
      name: 'Brie',
      type: 'soft, processed',
    },
    {
      calories: 103,
      id: 3,
      name: (
        <a
          href="https://components.looker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gouda
        </a>
      ),
      type: 'semi-hard, artisan, brined',
    },
    {
      calories: 104,
      id: 4,
      name: (
        <Link
          href="https://components.looker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          American
        </Link>
      ),
      type: 'semi-soft, processed',
    },
  ]

  test('returns a DataTable', () => {
    const Test = () =>
      useDataTableSortManager('Caption...', data, columns, actions)
    renderWithTheme(<Test />)
    expect(screen.getByText('ID')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Type')).toBeInTheDocument()

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('Cheddar')).toBeInTheDocument()
    expect(screen.getByText('hard, artisan, processed')).toBeInTheDocument()
  })

  test('returns a DataTable caption', () => {
    const Test = () =>
      useDataTableSortManager('Caption...', data, columns, actions)
    renderWithTheme(<Test />)
    // screen.debug()
    expect(screen.getByRole('table')).toHaveAttribute(
      'aria-label',
      'Caption...'
    )
  })

  test('onSort sorts elements', () => {
    const Test = () =>
      useDataTableSortManager('Caption...', data, columns, actions)
    renderWithTheme(<Test />)
    const sort = screen.getByText('ID').closest('th')
    expect(sort).not.toBeNull()
    expect(sort).toHaveAttribute('aria-sort', 'none')
    fireEvent.click(screen.getByText('ID'))
    expect(sort).toHaveAttribute('aria-sort', 'ascending')
    fireEvent.click(screen.getByText('ID'))
    expect(sort).toHaveAttribute('aria-sort', 'descending')
  })

  test('DataTableItem onClick behaves as expected', () => {
    const onClickMock = jest.fn()
    const Test = () =>
      useDataTableSortManager('Caption...', data, columns, actions, onClickMock)
    renderWithTheme(<Test />)
    const cheddarCell = screen.getByText('Cheddar')
    expect(cheddarCell).toBeInTheDocument()
    fireEvent.click(cheddarCell)
    expect(onClickMock).toHaveBeenCalled()
  })
})
