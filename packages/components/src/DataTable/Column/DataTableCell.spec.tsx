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
import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  test('keyup triggers :focus-visible blur removes', () => {
    renderWithTheme(
      <table>
        <tbody>
          <tr>
            <DataTableCell>Cell content</DataTableCell>
          </tr>
        </tbody>
      </table>
    )

    const cell = screen.getByText('Cell content')
    const td = cell.closest('td')
    expect(td).toHaveStyleRule('outline', 'none')

    fireEvent.keyUp(cell, {
      charCode: 13,
      code: 13,
      key: 'Enter',
    })

    expect(td).toHaveStyleRule('outline', '1px solid #6C43E0')

    fireEvent.blur(cell)

    expect(td).toHaveStyleRule('outline', 'none')
  })

  test('onClick callback + unset :focus-visible', () => {
    const onClick = jest.fn()

    renderWithTheme(
      <table>
        <tbody>
          <tr>
            <DataTableCell onClick={onClick}>Cell content</DataTableCell>
          </tr>
        </tbody>
      </table>
    )

    const cell = screen.getByText('Cell content')
    const td = cell.closest('td')

    // Apply focus to cell
    fireEvent.keyUp(cell, { key: 'Enter' })
    expect(td).toHaveStyleRule('outline', '1px solid #6C43E0')

    userEvent.click(cell)

    /**
     * TODO: Missing coverage
     * Frustratingly, this doesn't work in test but appears to work properly in real-world
     *
     *   expect(td).toHaveStyleRule('outline', 'none', {
     *   modifier: ':focus',
     * })
     */
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('tabIndex set properly on tabbable ', () => {
    renderWithTheme(
      <table>
        <tbody>
          <tr>
            <DataTableCell>
              <button>Click here</button>
            </DataTableCell>
          </tr>
        </tbody>
      </table>
    )

    expect(screen.getByRole('button')).toHaveAttribute('tabIndex', '-1')
  })

  test('onBlur callback', () => {
    const onBlur = jest.fn()

    renderWithTheme(
      <table>
        <tbody>
          <tr>
            <DataTableCell onBlur={onBlur}>Cell content</DataTableCell>
          </tr>
        </tbody>
      </table>
    )

    const cell = screen.getByText('Cell content')
    cell.focus()

    userEvent.tab()
    expect(onBlur).toHaveBeenCalledTimes(1)
  })
})
