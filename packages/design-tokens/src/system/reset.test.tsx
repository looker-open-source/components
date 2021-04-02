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

import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import React, { FC, useContext } from 'react'
import styled, { ThemeContext, ThemeProvider } from 'styled-components'
import { reset } from './reset'

describe('reset', () => {
  test('resetFn', () => {
    const TestWrapper: FC<{}> = ({ children }) => {
      const theme = useContext(ThemeContext)
      const resetFn = jest.fn()

      return (
        <ThemeProvider theme={{ ...theme, reset: resetFn }}>
          {children}
        </ThemeProvider>
      )
    }

    const Test = styled.p`
      ${reset}
    `

    renderWithTheme(
      <TestWrapper>
        <Test>Find me</Test>
      </TestWrapper>
    )

    const test = screen.getByText('Find me')
    expect(test).toHaveStyle('font-family: inherit;')
  })
})
