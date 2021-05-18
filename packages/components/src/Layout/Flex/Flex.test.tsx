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
import { Flex } from './Flex'

describe('Flex', () => {
  test('default ', () => {
    renderWithTheme(
      <Flex data-testid="flex">
        <div>🥑</div>
        <div>🐛</div>
      </Flex>
    )
    expect(screen.getByTestId('flex')).toHaveStyle('display: flex')
  })

  test('justifyContent', () => {
    renderWithTheme(<Flex data-testid="flex" justifyContent="center" />)
    expect(screen.getByTestId('flex')).toHaveStyle('justify-content: center')
  })

  test('alignItems', () => {
    renderWithTheme(<Flex data-testid="flex" alignItems="center" />)
    expect(screen.getByTestId('flex')).toHaveStyle('align-items: center')
  })

  test('alignContent', () => {
    renderWithTheme(<Flex data-testid="flex" alignContent="start" />)
    expect(screen.getByTestId('flex')).toHaveStyle('align-content: start')
  })

  test('flexDirection', () => {
    renderWithTheme(<Flex data-testid="flex" flexDirection="row-reverse" />)
    expect(screen.getByTestId('flex')).toHaveStyle(
      'flex-direction: row-reverse'
    )
  })

  test('flexWrap', () => {
    renderWithTheme(<Flex data-testid="flex" flexWrap="nowrap" />)
    expect(screen.getByTestId('flex')).toHaveStyle('flex-wrap: nowrap')
  })
})
