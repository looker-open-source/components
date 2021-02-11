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
import { screen } from '@testing-library/react'
import { Breakpoint } from './Breakpoint'

describe('Breakpoint', () => {
  test('all', () => {
    renderWithTheme(
      <Breakpoint show={['mobile', 'xl']}>
        <p>This is a thing</p>
      </Breakpoint>
    )
    const element = screen.queryByText('This is a thing')
    expect(element).toBeInTheDocument()
  })

  test('mobile', () => {
    renderWithTheme(
      <Breakpoint show="mobile">
        <p>This is a thing</p>
      </Breakpoint>
    )
    const element = screen.queryByText('This is a thing')
    expect(element).not.toBeInTheDocument()
  })

  test('tablet up', () => {
    renderWithTheme(
      <Breakpoint show={['tablet', undefined]}>
        <p>This is a thing</p>
      </Breakpoint>
    )
    const element = screen.queryByText('This is a thing')
    expect(element).toBeInTheDocument()
  })

  test('up to tablet', () => {
    renderWithTheme(
      <Breakpoint show={[undefined, 'tablet']}>
        <p>This is a thing</p>
      </Breakpoint>
    )
    const element = screen.queryByText('This is a thing')
    expect(element).not.toBeInTheDocument()
  })
})
