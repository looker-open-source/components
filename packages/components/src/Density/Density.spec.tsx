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
import { composeStories } from '@storybook/testing-react'
import { screen } from '@testing-library/react'
import * as stories from './Density.stories'
const { Basic, Plus1, Minus3 } = composeStories(stories)

describe('Density', () => {
  test('default', () => {
    renderWithTheme(<Basic />)
    expect(screen.getByText('Cheddar')).toHaveStyle('font-size: 0.875rem')
  })

  test('+1', () => {
    renderWithTheme(<Plus1 />)
    expect(screen.getByText('Cheddar')).toHaveStyle('font-size: 1rem')
  })

  test('-3', () => {
    renderWithTheme(<Minus3 />)
    expect(screen.getByText('Cheddar')).toHaveStyle('font-size: 0.75rem')
  })
})
