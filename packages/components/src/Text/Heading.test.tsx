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
import { Heading } from './Heading'

describe('Heading', () => {
  test('default', () => {
    renderWithTheme(<Heading>🥑</Heading>)
    expect(screen.getByText('🥑')).toBeInTheDocument()
    expect(screen.getByText('🥑').tagName).toEqual('H2')
  })

  test('<h1>', () => {
    renderWithTheme(<Heading as="h1">🥑</Heading>)
    expect(screen.getByText('🥑').tagName).toEqual('H1')
    expect(screen.getByText('🥑')).toHaveStyle('font-size: 1.5rem;')
  })

  test('<h1> sized to <h2>', () => {
    renderWithTheme(
      <Heading as="h1" fontSize="xlarge">
        🥑
      </Heading>
    )
    expect(screen.getByText('🥑').tagName).toEqual('H1')
    expect(screen.getByText('🥑')).toHaveStyle('font-size: 1.375rem;')
  })

  test('bold', () => {
    renderWithTheme(<Heading fontWeight="bold">🥑</Heading>)
    expect(screen.getByText('🥑')).toHaveStyle('font-weight: 700')
  })

  test('transform', () => {
    renderWithTheme(<Heading textTransform="capitalize">🥑</Heading>)
    expect(screen.getByText('🥑')).toHaveStyle('text-transform: capitalize')
  })

  test('variant color', () => {
    renderWithTheme(<Heading color="subdued">🥑</Heading>)
    expect(screen.getByText('🥑')).toHaveStyle('color: rgb(147, 155, 165)')
  })

  test('truncated', () => {
    renderWithTheme(<Heading truncate>🥑</Heading>)
    expect(screen.getByText('🥑')).toHaveStyle('text-overflow: ellipsis;')
  })

  test('multiline truncate', () => {
    renderWithTheme(<Heading truncateLines={2}>🥑</Heading>)
    expect(screen.getByText('🥑')).toHaveStyle('display: -webkit-box;')
  })
})
