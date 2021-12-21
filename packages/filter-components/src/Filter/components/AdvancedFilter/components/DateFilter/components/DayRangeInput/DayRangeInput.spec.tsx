/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { DayRangeInput } from './DayRangeInput'

describe('DayRangeInput', () => {
  it('renders a DayRangeInput', () => {
    const onChangeMock = jest.fn()
    const value = {
      from: new Date(
        'Tue Jul 28 1914 00:00:00 GMT-0800 (Pacific Daylight Time)'
      ),
      to: new Date('Sat Jun 28 1919 00:00:00 GMT-0700 (Pacific Daylight Time)'),
    }
    renderWithTheme(<DayRangeInput onChange={onChangeMock} value={value} />)

    const token = screen.getByText('1914/07/28 – 1919/06/28')
    fireEvent.click(token)

    const fifteenths = screen.getAllByText('15')
    fireEvent.click(fifteenths[0])
    fireEvent.click(fifteenths[1])

    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "from": 1914-07-15T08:00:00.000Z,
            "to": 1919-06-28T07:00:00.000Z,
          },
        ],
        Array [
          Object {
            "from": 1914-07-28T08:00:00.000Z,
            "to": 1914-08-15T08:00:00.000Z,
          },
        ],
      ]
    `)
    // Close menu to silence act warning
    fireEvent.click(document)
  })
})
