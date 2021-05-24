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
import 'jest-styled-components'
import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { Section } from './Section'

describe('Section', () => {
  test('render', () => {
    renderWithTheme(<Section>Section content</Section>)
    expect(screen.getByText('Section content')).toBeInTheDocument()
  })

  test('renders as main if pass as a prop.', () => {
    renderWithTheme(<Section main>Section content</Section>)
    expect(screen.getByRole('main')).toBeInTheDocument()
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
    renderWithTheme(<Section>Section content</Section>)

    expect(
      getComputedStyle(screen.getByText('Section content')).getPropertyValue(
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

    renderWithTheme(<Section>Section content</Section>)

    expect(
      getComputedStyle(screen.getByText('Section content')).getPropertyValue(
        'box-shadow'
      )
    ).toEqual('0 -4px 4px -4px #DEE1E5,inset 0 -4px 4px -4px #DEE1E5')
  })
})
