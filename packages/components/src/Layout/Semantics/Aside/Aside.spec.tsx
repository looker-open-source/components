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

import 'jest-styled-components'
import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { Aside } from './Aside'

describe('Aside', () => {
  test('default', () => {
    renderWithTheme(<Aside>Aside content</Aside>)
    expect(screen.getByText('Aside content')).toBeInTheDocument()
  })

  test('Can use specific string to size its width.', () => {
    renderWithTheme(<Aside width="rail">Aside content</Aside>)
    expect(screen.getByText('Aside content')).toHaveStyleRule('width: 3.5rem;')
  })

  test('Collapse prop will not render the component.', () => {
    renderWithTheme(<Aside collapse>Aside content</Aside>)
    expect(screen.queryByText('Aside content')).not.toBeInTheDocument()
  })

  test('does not have a box shadow if content does not overflow', () => {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      configurable: true,
      value: 0,
    })
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 500,
    })
    renderWithTheme(<Aside>Aside content</Aside>)

    expect(
      getComputedStyle(screen.getByText('Aside content')).getPropertyValue(
        'box-shadow'
      )
    ).toEqual('')
  })

  test('has a box shadow when content overflows', () => {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
      configurable: true,
      value: 500,
    })

    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 0,
    })

    renderWithTheme(<Aside>Aside content</Aside>)

    expect(
      getComputedStyle(screen.getByText('Aside content')).getPropertyValue(
        'box-shadow'
      )
    ).toEqual('inset 0 -4px 4px -4px #DEE1E5')
  })

  test('render border properly', () => {
    renderWithTheme(<Aside border>Aside content</Aside>)
    expect(screen.getByText('Aside content')).toHaveStyle(
      'border: 1px solid #DEE1E5;'
    )
  })

  test('render borderBottom properly', () => {
    renderWithTheme(<Aside borderBottom>Aside content</Aside>)

    expect(screen.getByText('Aside content')).toHaveStyle(
      'border-bottom: 1px solid #DEE1E5;'
    )
  })

  test('render borderLeft properly', () => {
    renderWithTheme(<Aside borderLeft>Aside content</Aside>)

    expect(screen.getByText('Aside content')).toHaveStyle(
      'border-left: 1px solid #DEE1E5;'
    )
  })

  test('render borderRight properly', () => {
    renderWithTheme(<Aside borderRight>Aside content</Aside>)

    expect(screen.getByText('Aside content')).toHaveStyle(
      'border-right: 1px solid #DEE1E5;'
    )
  })

  test('render borderTop properly', () => {
    renderWithTheme(<Aside borderTop>Aside content</Aside>)

    expect(screen.getByText('Aside content')).toHaveStyle(
      'border-top: 1px solid #DEE1E5;'
    )
  })

  test('render borderX properly', () => {
    renderWithTheme(<Aside borderX>Aside content</Aside>)

    const aside = screen.getByText('Aside content')

    expect(aside).toHaveStyle('border-left: 1px solid #DEE1E5;')
    expect(aside).toHaveStyle('border-right: 1px solid #DEE1E5;')
  })

  test('render borderY properly', () => {
    renderWithTheme(<Aside borderY>Aside content</Aside>)

    const aside = screen.getByText('Aside content')

    expect(aside).toHaveStyle('border-bottom: 1px solid #DEE1E5;')
    expect(aside).toHaveStyle('border-top: 1px solid #DEE1E5;')
  })

  test('render border color if passed', () => {
    renderWithTheme(<Aside border="key">Aside content</Aside>)

    expect(screen.getByText('Aside content')).toHaveStyle(
      'border: 1px solid #6C43E0;'
    )
  })
})
