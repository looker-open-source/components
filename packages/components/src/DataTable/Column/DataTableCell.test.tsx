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
import { fireEvent, screen } from '@testing-library/react'
import { DataTable } from '../DataTable'
import { DataTableItem } from '../Item'
import { DataTableCell } from './DataTableCell'

describe('DataTableCell', () => {
  test('Basic content', () => {
    renderWithTheme(
      <table>
        <tbody>
          <tr>
            <DataTableCell>Cell content</DataTableCell>
          </tr>
        </tbody>
      </table>
    )

    expect(screen.getByText('Cell content')).toBeInTheDocument()
  })

  test('indicator', () => {
    renderWithTheme(
      <table>
        <tbody>
          <tr>
            <DataTableCell indicator="FauxIcon">Cell content</DataTableCell>
          </tr>
        </tbody>
      </table>
    )

    expect(screen.getByText('FauxIcon')).toBeInTheDocument()
  })

  test('description & indicator', () => {
    renderWithTheme(
      <table>
        <tbody>
          <tr>
            <DataTableCell indicator="FauxIcon" description="descriptive text">
              Cell content
            </DataTableCell>
          </tr>
        </tbody>
      </table>
    )

    expect(screen.getByText('descriptive text')).toBeInTheDocument()
    expect(screen.getByText('FauxIcon')).toBeInTheDocument()
  })

  test('onKeyUp callback', () => {
    const onKeyUp = jest.fn()

    renderWithTheme(
      <table>
        <tbody>
          <tr>
            <DataTableCell onKeyUp={onKeyUp}>Cell content</DataTableCell>
          </tr>
        </tbody>
      </table>
    )

    fireEvent.keyUp(screen.getByText('Cell content'), {
      charCode: 13,
      code: 13,
      key: 'Enter',
    })

    expect(onKeyUp).toHaveBeenCalledTimes(1)
  })

  test('onBlur callback', () => {
    const onBlur = jest.fn()

    renderWithTheme(
      <>
        <DataTable
          caption="Test"
          columns={[
            {
              id: 'name',
              title: 'Name',
            },
          ]}
        >
          <DataTableItem id="faux">
            <DataTableCell onBlur={onBlur}>Cell content</DataTableCell>
          </DataTableItem>
        </DataTable>
        <button>Move focus here</button>
      </>
    )

    const cell = screen.getByText('Cell content')
    cell.focus()
    cell.blur()

    expect(onBlur).toHaveBeenCalledTimes(1)
  })
})
