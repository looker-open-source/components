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
import { TimeInput } from './TimeInput'

describe('TimeInput', () => {
  it('onChange returns a properly formatted date object', () => {
    const handleChange = jest.fn()
    renderWithTheme(
      <TimeInput
        date={new Date(2010, 9, 29, 15, 26, 35)}
        onChange={handleChange}
      />
    )
    const inputBox = screen.getByDisplayValue('03:26 pm')
    fireEvent.click(inputBox) // open select menu

    const newTime = screen.getByText('10:30 am')
    fireEvent.click(newTime)

    expect(handleChange.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          2010-10-29T17:30:00.000Z,
        ],
      ]
    `)
  })
})
