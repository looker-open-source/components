/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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
import { createWithTheme } from '@looker/components-test-utils'
import { Code } from './Code'

test('A default Code component', () => {
  const component = createWithTheme(<Code>Hello</Code>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Code component resized', () => {
  const component = createWithTheme(<Code fontSize="xxxxlarge">Hello</Code>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Code component aligned', () => {
  const component = createWithTheme(<Code textAlign="right">Hello</Code>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Code component weight', () => {
  const component = createWithTheme(<Code fontWeight="bold">Hello</Code>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
