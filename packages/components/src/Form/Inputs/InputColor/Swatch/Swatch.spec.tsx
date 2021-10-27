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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Swatch } from './Swatch'

describe('Swatch', () => {
  test('default', () => {
    renderWithTheme(<Swatch />)
    expect(screen.getByTestId('swatch')).toBeInTheDocument()
  })

  test('hex value', () => {
    renderWithTheme(<Swatch color="#4c6670" />)
    expect(screen.getByTestId('swatch')).toHaveStyle(
      'background-color: #4c6670'
    )
  })

  test('width and height', () => {
    renderWithTheme(<Swatch color="blue" size="large" />)
    const swatch = screen.getByTestId('swatch')
    expect(swatch).toHaveStyle('height: 2rem')
    expect(swatch).toHaveStyle('width: 2rem')
  })

  test('disabled state', () => {
    renderWithTheme(<Swatch color="blue" disabled />)
    // eslint-disable-next-line jest-dom/prefer-enabled-disabled
    expect(screen.getByTestId('swatch')).toHaveAttribute('disabled')
  })
})
