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
import type { MouseEvent } from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { render, screen } from '@testing-library/react'
import {
  mockData,
  mockFields,
  mockTableConfig,
  mockDataWithRowTotals,
  mockFieldsRowTotals,
} from '@looker/visualizations-adapters'
import type { SDKRecord } from '@looker/visualizations-adapters'
import { flexRender } from '@tanstack/react-table'
import type { Column, Header } from '@tanstack/react-table'
import { useHeadlessTable } from './useHeadlessTable'
const wrapper = ({ children }: React.PropsWithChildren<unknown>) => (
  <>{children}</>
)

it('configures table object', () => {
  const { result } = renderHook(
    () =>
      useHeadlessTable({
        data: mockData,
        fields: mockFields,
        config: mockTableConfig,
      }),
    { wrapper }
  )

  const tableRows = result.current.table.getRowModel().rows
  const firstRow = tableRows[0].getVisibleCells()

  const RowComponent = () => (
    <table>
      <tbody>
        <tr>
          {firstRow.map(({ column, getContext }, i) => (
            <td key={i}>{flexRender(column.columnDef.cell, getContext())}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )

  render(<RowComponent />)
  const tableCells = screen.getAllByRole('cell')

  expect(tableCells.map(cell => cell.textContent)).toEqual([
    '2019-12-22',
    'California',
    '3087',
    '1088',
  ])
})

it('Handles table sorting state', () => {
  const { result, rerender } = renderHook(
    () =>
      useHeadlessTable({
        data: mockData,
        fields: mockFields,
        config: mockTableConfig,
      }),
    { wrapper }
  )

  // column sorted descending
  expect(result.current.sorting).toEqual([{ id: 'orders.count', desc: true }])

  act(() => {
    result.current.handleTableSort(
      {
        id: 'orders.count',
        column: {
          id: 'orders.count',
          getCanSort: () => true,
        } as Column<SDKRecord, unknown>,
      } as Header<SDKRecord, unknown>,
      { shiftKey: false } as MouseEvent<Element>
    )
  })

  rerender()

  // sorting reversed: `desc` now set to `false`
  expect(result.current.sorting).toEqual([{ id: 'orders.count', desc: false }])
})

it('Handles table with row totals', () => {
  const { result } = renderHook(
    () =>
      useHeadlessTable({
        data: mockDataWithRowTotals,
        fields: mockFieldsRowTotals,
        config: { ...mockTableConfig, show_row_totals: true },
      }),
    { wrapper }
  )

  const tableRows = result.current.table.getRowModel().rows
  const firstRow = tableRows[0].getVisibleCells()

  const RowComponent = () => (
    <table>
      <tbody>
        <tr>
          {firstRow.map(({ column, getContext }, i) => (
            <td key={i}>{flexRender(column.columnDef.cell, getContext())}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )

  render(<RowComponent />)
  const tableCells = screen.getAllByRole('cell')
  expect(tableCells.map(cell => cell.textContent)).toEqual([
    '',
    '',
    '89',
    '39',
    '128',
  ])
})

it('Hides row totals when show_row_totals is false', () => {
  const { result } = renderHook(
    () =>
      useHeadlessTable({
        data: mockDataWithRowTotals,
        fields: mockFieldsRowTotals,
        config: { ...mockTableConfig, show_row_totals: false },
      }),
    { wrapper }
  )

  const tableRows = result.current.table.getRowModel().rows
  const firstRow = tableRows[0].getVisibleCells()

  const RowComponent = () => (
    <table>
      <tbody>
        <tr>
          {firstRow.map(({ column, getContext }, i) => (
            <td key={i}>{flexRender(column.columnDef.cell, getContext())}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )

  render(<RowComponent />)
  const tableCells = screen.getAllByRole('cell')
  expect(tableCells.map(cell => cell.textContent)).toEqual(['', '', '89', '39'])
})

it('controls column visibility based on series visibility', () => {
  const { result } = renderHook(
    () =>
      useHeadlessTable({
        data: mockData,
        fields: mockFields,
        config: {
          ...mockTableConfig,
          series: {
            'orders.count': {
              visible: true,
            },
            'orders.average_total_amount_of_order_usd': {
              visible: false,
            },
            'orders.created_date': {
              visible: true,
            },
            'users.state': {
              visible: true,
            },
          },
        },
      }),
    { wrapper }
  )

  const tableRows = result.current.table.getRowModel().rows
  const firstRow = tableRows[0].getVisibleCells()

  const RowComponent = () => (
    <table>
      <tbody>
        <tr>
          {firstRow.map(({ column, getContext }, i) => (
            <td key={i}>{flexRender(column.columnDef.cell, getContext())}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )

  render(<RowComponent />)
  const tableCells = screen.getAllByRole('cell')

  expect(tableCells.map(cell => cell.textContent)).toEqual([
    '2019-12-22',
    'California',
    '3087',
  ])
})
