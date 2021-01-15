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
import { OrderedList } from './OrderedList'

import 'jest-styled-components'

describe('OrderedList', () => {
  test('Should display child li elements', () => {
    const { getByText } = renderWithTheme(
      <OrderedList>
        <li>Gouda</li>
        <li>Swiss</li>
        <li>Pepper Jack</li>
      </OrderedList>
    )

    getByText('Gouda')
    getByText('Swiss')
    getByText('Pepper Jack')
  })

  test("Accepts 'number' type", () => {
    const { getByText, getByRole } = renderWithTheme(
      <OrderedList type="number">
        <li>Gouda</li>
        <li>Swiss</li>
        <li>Pepper Jack</li>
      </OrderedList>
    )

    getByText('Gouda')
    getByText('Swiss')
    getByText('Pepper Jack')

    expect(getByRole('list')).toHaveAttribute('type', 'number')
  })

  test("Accepts 'letter' type", () => {
    const { getByText, getByRole } = renderWithTheme(
      <OrderedList type="letter">
        <li>Gouda</li>
        <li>Swiss</li>
        <li>Pepper Jack</li>
      </OrderedList>
    )

    getByText('Gouda')
    getByText('Swiss')
    getByText('Pepper Jack')

    expect(getByRole('list')).toHaveAttribute('type', 'letter')
  })
})
