/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import { assertSnapshot, renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import React from 'react'
import { InlineInputText, InlineInputTextBase } from './InlineInputText'

test('InlineInputText renders an input with a placeholder', () => {
  assertSnapshot(<InlineInputText placeholder="this is the placeholder" />)
})

test('InlineInputText renders an input with no value', () => {
  assertSnapshot(<InlineInputText />)
})

test('InlineInputText renders an input with specific predefined value', () => {
  assertSnapshot(<InlineInputText value="type here..." />)
})

test('InlineInputTextBase renders a subset of styles', () => {
  renderWithTheme(<InlineInputTextBase placeholder="type here..." />)
  expect(
    screen.getByPlaceholderText('type here...').parentElement
  ).not.toHaveStyleRule('border-bottom: 1px dashed')
})
