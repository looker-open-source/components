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
import { screen } from '@testing-library/react'
import { FlexItem } from './FlexItem'

describe('FlexItem', () => {
  test('default', () => {
    renderWithTheme(<FlexItem data-testid="flex">💪</FlexItem>)
    expect(screen.getByTestId('flex')).toHaveStyle('display: block;')
  })

  test('alignSelf', () => {
    renderWithTheme(<FlexItem data-testid="flex" alignSelf="center" />)
    expect(screen.getByTestId('flex')).toHaveStyle('align-self: center;')
  })

  test('order', () => {
    renderWithTheme(<FlexItem data-testid="flex" order={1} />)
    expect(screen.getByTestId('flex')).toHaveStyle('order: 1;')
  })

  test('flex', () => {
    renderWithTheme(<FlexItem data-testid="flex" flex="1 50px" />)
    expect(screen.getByTestId('flex')).toHaveStyle('flex: 1 50px;')
  })

  test('basis', () => {
    renderWithTheme(<FlexItem data-testid="flex" flexBasis="100px" />)
    expect(screen.getByTestId('flex')).toHaveStyle('flex-basis: 100px;')
  })
})
