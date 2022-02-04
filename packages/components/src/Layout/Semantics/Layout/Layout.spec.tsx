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
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Basic, FixedWithFooterAndHeaderShadow } from './Layout.stories'

describe('Semantic Layout', () => {
  test('render Layout', () => {
    renderWithTheme(<Basic />)
    expect(screen.getByText("I'm the header")).toBeInTheDocument()
    expect(screen.getAllByText('blah')[0]).toBeInTheDocument()
    expect(screen.getByText('Page title')).toBeInTheDocument()
    expect(screen.getByText("I'm a footer")).toBeInTheDocument()
  })

  test('Footer And Header fixed', () => {
    renderWithTheme(<FixedWithFooterAndHeaderShadow />)
    const container = screen.getByText("I'm the header").closest('div')
    expect(container).toHaveStyle('overflow: hidden')
  })
})
