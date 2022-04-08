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
import { DividerVertical } from './DividerVertical'

test('render Default DividerVertical', () => {
  renderWithTheme(<DividerVertical />)
  const divider = screen.getByRole('separator')
  expect(divider).toBeInTheDocument()
  expect(divider).toHaveAttribute('aria-orientation', 'vertical')
})

// CSS libraries like bootstrap may override hr { height }, causing our divider
// to not be visible. In order to be defensive against this, we set this to
// inherit.
test('overrides global height declarations when stretching', () => {
  renderWithTheme(<DividerVertical stretch />)
  expect(screen.getByRole('separator')).toHaveStyle({ height: 'inherit' })
})
