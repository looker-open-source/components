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
import { Paragraph } from './Paragraph'

describe('Paragraph', () => {
  test('default', () => {
    renderWithTheme(<Paragraph>Hello</Paragraph>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('Hello').tagName).toEqual('P')
  })

  test('fontSize', () => {
    renderWithTheme(<Paragraph fontSize="xxxxlarge">Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('font-size: 2.25rem;')
  })

  test('textAlign', () => {
    renderWithTheme(<Paragraph textAlign="right">Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('text-align: right')
  })

  test('fontWeight', () => {
    renderWithTheme(<Paragraph fontWeight="bold">Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('font-weight: 700;')
  })

  test('color', () => {
    renderWithTheme(<Paragraph color="critical">Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('color:  rgb(204, 31, 54)')
  })

  test('textTransform', () => {
    renderWithTheme(<Paragraph textTransform="uppercase">Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('text-transform: uppercase;')
  })

  test('breakword', () => {
    renderWithTheme(<Paragraph breakword>Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('overflow-wrap: break-word;')
  })

  test('textDecoration', () => {
    renderWithTheme(<Paragraph textDecoration="line-through">Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle(
      'text-decoration: line-through;'
    )
  })

  test('truncate', () => {
    renderWithTheme(<Paragraph truncate>Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('text-overflow: ellipsis;')
  })

  test('multiline truncate', () => {
    renderWithTheme(<Paragraph truncateLines={2}>Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('display: -webkit-box;')
  })
})
