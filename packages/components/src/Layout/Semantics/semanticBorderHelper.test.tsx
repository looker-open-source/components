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

import { Aside } from './Aside'

describe('Layout has border', () => {
  test('render border properly', () => {
    renderWithTheme(<Aside border>Aside</Aside>)
    expect(screen.getByText('Aside')).toHaveStyle('border: 1px solid #DEE1E5;')
  })

  test('render borderBottom properly', () => {
    renderWithTheme(<Aside borderBottom>Aside</Aside>)

    expect(screen.getByText('Aside')).toHaveStyle(
      'border-bottom: 1px solid #DEE1E5;'
    )
  })

  test('render borderLeft properly', () => {
    renderWithTheme(<Aside borderLeft>Aside</Aside>)

    expect(screen.getByText('Aside')).toHaveStyle(
      'border-left: 1px solid #DEE1E5;'
    )
  })

  test('render borderRight properly', () => {
    renderWithTheme(<Aside borderRight>Aside</Aside>)

    expect(screen.getByText('Aside')).toHaveStyle(
      'border-right: 1px solid #DEE1E5;'
    )
  })

  test('render borderTop properly', () => {
    renderWithTheme(<Aside borderTop>Aside</Aside>)

    expect(screen.getByText('Aside')).toHaveStyle(
      'border-top: 1px solid #DEE1E5;'
    )
  })

  test('render borderX properly', () => {
    renderWithTheme(<Aside borderX>Aside</Aside>)

    const aside = screen.getByText('Aside')

    expect(aside).toHaveStyle('border-left: 1px solid #DEE1E5;')
    expect(aside).toHaveStyle('border-right: 1px solid #DEE1E5;')
  })

  test('render borderY properly', () => {
    renderWithTheme(<Aside borderY>Aside</Aside>)

    const aside = screen.getByText('Aside')

    expect(aside).toHaveStyle('border-bottom: 1px solid #DEE1E5;')
    expect(aside).toHaveStyle('border-top: 1px solid #DEE1E5;')
  })

  test('render border color if passed', () => {
    renderWithTheme(<Aside border="key">Aside</Aside>)

    expect(screen.getByText('Aside')).toHaveStyle('border: 1px solid #6C43E0;')
  })
})
