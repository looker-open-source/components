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
import {
  mockTableConfig,
  mockFields,
  mockPivotedFields,
  mockData,
  mockTotals,
  mockPivotedData,
  mockPivotGender,
} from '@looker/visualizations-adapters'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen, within, fireEvent } from '@testing-library/react'
import { Table } from './'

// return an array of strings from an array of html elements
const getTextContent = (cells: HTMLElement[]) => cells.map(c => c.textContent)

it('organizes table columns as specified by config.column_order', () => {
  renderWithTheme(
    <Table
      config={{
        ...mockTableConfig,
        show_row_numbers: false,
        column_order: [
          'orders.count',
          'orders.created_date',
          'orders.average_total_amount_of_order_usd',
          'users.state',
        ],
      }}
      fields={mockFields}
      data={mockData}
    />
  )

  const headers = screen.getAllByTestId('columnheader-label')

  expect(getTextContent(headers)).toEqual([
    'Orders Count',
    'Orders Created Date',
    'Orders Average Total Amount of Order USD',
    'Users State',
  ])
})

it('renders row numbers when config.show_row_numbers is true', () => {
  renderWithTheme(
    <Table
      config={{ ...mockTableConfig, show_row_numbers: true }}
      fields={mockFields}
      data={mockData}
    />
  )

  // assert that the first visible table cell rendered is the row index (1)
  expect(screen.getAllByRole('cell')[1]).toHaveTextContent('1')
})

it('hides row numbers when config.show_row_numbers is false', () => {
  renderWithTheme(
    <Table
      config={{ ...mockTableConfig, show_row_numbers: false }}
      fields={mockFields}
      data={mockData}
    />
  )

  // assert that the first visible table cell rendered is a query response value
  expect(screen.getAllByRole('cell')[1]).toHaveTextContent('2019-12-22')
})

it('sorts table columns', () => {
  const highestOrderCount = {
    'orders.count': Infinity,
    'orders.average_total_amount_of_order_usd': Infinity,
    'orders.created_date': '2012-12-12',
    'users.state': 'Oregon',
  }

  const lowestOrderCount = {
    'orders.count': -Infinity,
    'orders.average_total_amount_of_order_usd': -Infinity,
    'orders.created_date': '2022-09-01',
    'users.state': 'Oregon',
  }

  renderWithTheme(
    <Table
      config={{ ...mockTableConfig, show_row_numbers: false }}
      fields={mockFields}
      data={[...mockData, lowestOrderCount, highestOrderCount]}
    />
  )

  // mock fields sorted by 'orders.count' by default
  const topRow = screen.getAllByRole('row')[1]
  expect(getTextContent(within(topRow).getAllByRole('cell'))).toEqual([
    '',
    '2012-12-12',
    'Oregon',
    'Infinity',
    'Infinity',
  ])

  // click sort button to switch direction (render lowest-to-highest order counts)
  const sortButton = screen.getByText('Sort ascending').closest('button')
  fireEvent.click(sortButton as Element)

  const newTopRow = screen.getAllByRole('row')[1]
  expect(getTextContent(within(newTopRow).getAllByRole('cell'))).toEqual([
    '',
    '2022-09-01',
    'Oregon',
    '-Infinity',
    '-Infinity',
  ])
})

it('sorts multiple table columns when shift key is held down', () => {
  const ariaSortValue = (el: Element) =>
    el.attributes.getNamedItem('aria-sort')?.value

  renderWithTheme(
    <Table
      config={{ ...mockTableConfig, show_row_numbers: false }}
      fields={mockFields}
      data={mockData}
    />
  )

  // omit first and last elements which will always be the virtual scrolling spacers
  const headers = screen.getAllByRole('columnheader').slice(1, -1)

  const sortButtons = headers.map(h =>
    within(h).getByRole('button', { hidden: true })
  )

  // default: neither first or second columns are sorted
  expect(ariaSortValue(headers[0])).toEqual('none')
  expect(ariaSortValue(headers[1])).toEqual('none')

  // sort first column
  fireEvent.click(sortButtons[0])

  expect(ariaSortValue(headers[0])).toEqual('descending')
  expect(ariaSortValue(headers[1])).toEqual('none')

  // sort first AND second columns
  fireEvent.click(sortButtons[1], { shiftKey: true })

  expect(ariaSortValue(headers[0])).toEqual('descending')
  expect(ariaSortValue(headers[1])).toEqual('descending')

  // reverse first column while maintaining second column sort state
  fireEvent.click(sortButtons[0], { shiftKey: true })

  expect(ariaSortValue(headers[0])).toEqual('ascending')
  expect(ariaSortValue(headers[1])).toEqual('descending')
})

it('renders totals when config.show_totals is true', () => {
  renderWithTheme(
    <Table
      config={{ ...mockTableConfig, show_totals: true }}
      fields={mockFields}
      data={mockData}
      totals={mockTotals}
    />
  )
  const footerRow =
    screen.getAllByRole('row')[screen.getAllByRole('row').length - 1]
  expect(
    getTextContent(within(footerRow).getAllByRole('columnheader'))
  ).toEqual(['Totals', '', '5689', '2245'])
})

it('renders value format on body', () => {
  const configCopy = { ...mockTableConfig }
  configCopy.series = [
    { value_format: '$#,##0.00' },
    { value_format: '0,0.[00]' },
  ]
  renderWithTheme(
    <Table
      config={{ ...configCopy, show_totals: true }}
      fields={mockFields}
      data={mockData}
      totals={mockTotals}
    />
  )
  const bodyRow =
    screen.getAllByRole('row')[screen.getAllByRole('row').length - 2]
  expect(getTextContent(within(bodyRow).getAllByRole('cell'))).toEqual([
    '',
    '2019-12-19',
    'Oregon',
    '$87.00',
    '88',
  ])
})

it('renders value format on totals', () => {
  const configCopy = { ...mockTableConfig }
  configCopy.series = [
    { value_format: '$#,##0.00' },
    { value_format: '0,0.[00]' },
  ]
  renderWithTheme(
    <Table
      config={{ ...configCopy, show_totals: true }}
      fields={mockFields}
      data={mockData}
      totals={mockTotals}
    />
  )
  const footerRow =
    screen.getAllByRole('row')[screen.getAllByRole('row').length - 1]
  expect(
    getTextContent(within(footerRow).getAllByRole('columnheader'))
  ).toEqual(['Totals', '', '$5,689.00', '2,245'])
})

it('renders multiple table head rows for pivoted queries', () => {
  renderWithTheme(
    <Table
      config={mockTableConfig}
      fields={mockPivotedFields}
      data={mockPivotedData}
      pivots={mockPivotGender}
    />
  )

  const tHead = screen.getAllByRole('rowgroup')[0]
  const headerRows = within(tHead).getAllByRole('row')

  // two header rows rendered in total
  expect(headerRows.length).toEqual(2)

  // first header row is the pivot labels
  expect(
    getTextContent(within(headerRows[0]).getAllByRole('columnheader'))
  ).toEqual(['', 'Users Gender', 'f', 'm', 'male', ''])

  // second header row is the column labels
  expect(
    getTextContent(within(headerRows[1]).getAllByTestId('columnheader-label'))
  ).toEqual(['Users City', 'Orders Count', 'Orders Count', 'Orders Count'])
})
