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
import { render, screen } from '@testing-library/react'
import { StyleDefender } from './StyleDefender'
import { ThemeProvider } from './ThemeProvider'

describe('StyleDefender', () => {
  test('Direct styles', () => {
    render(
      <ThemeProvider>
        <StyleDefender>Find me</StyleDefender>
      </ThemeProvider>
    )

    const test = screen.getByText('Find me')
    expect(test).toHaveStyle(
      "font-family: Roboto,'Noto Sans','Noto Sans JP','Noto Sans CJK KR','Noto Sans Arabic UI','Noto Sans Devanagari UI','Noto Sans Hebrew','Noto Sans Thai UI',Helvetica,Arial,sans-serif"
    )
    expect(test).toHaveStyle('font-size: 16px')
  })

  test('Computed', () => {
    render(
      <ThemeProvider>
        <StyleDefender>
          <p>Find me</p>
        </StyleDefender>
      </ThemeProvider>
    )

    const computedStyle = getComputedStyle(screen.getByText('Find me'))
    expect(computedStyle.boxSizing).toEqual('border-box')
  })

  test('Computed negative', () => {
    render(
      <ThemeProvider>
        <p>Find me</p>
      </ThemeProvider>
    )

    const computedStyle = getComputedStyle(screen.getByText('Find me'))
    expect(computedStyle.boxSizing).not.toEqual('border-box')
  })
})