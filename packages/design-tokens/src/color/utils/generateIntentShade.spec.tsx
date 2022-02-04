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

import { render, screen } from '@testing-library/react'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
/**
 * This import path is ill-advised but acceptable since this
 * is a test-only import and prevents a package-dependency loop
 */
import { renderWithTheme } from '../../../../components-test-utils/src'
import { theme } from '../../theme'
import { generateIntentShade } from './generateIntentShade'

describe('generateIntentShade', () => {
  test('default', () => {
    const Test = styled.p`
      background: ${generateIntentShade('blue')};
      color: ${generateIntentShade('lightblue')};
    `

    renderWithTheme(<Test>Find me</Test>)

    const test = screen.getByText('Find me')
    expect(test).toHaveStyle('background: #0000bf')
    expect(test).toHaveStyle('color: #348fac')
  })

  test('light background', () => {
    const Test = styled.p`
      background: ${generateIntentShade('blue')};
      color: ${generateIntentShade('lightblue')};
    `

    const customTheme = theme
    theme.colors.background = 'black'

    render(
      <ThemeProvider theme={customTheme}>
        <Test>Find me</Test>
      </ThemeProvider>
    )

    const test = screen.getByText('Find me')
    expect(test).toHaveStyle('background: rgb(64, 64, 255);')
    expect(test).toHaveStyle('color: rgb(255, 255, 255);')
  })
})
