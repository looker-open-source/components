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

import React from 'react'
import { createWithTheme } from '@looker/components-test-utils'
import { Text } from './Text'

test('A default Text component', () => {
  const component = createWithTheme(<Text>Hello</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component resized', () => {
  const component = createWithTheme(<Text fontSize="xxxxlarge">Hello</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component weight', () => {
  const component = createWithTheme(<Text fontWeight="bold">Hello</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component with variant', () => {
  const component = createWithTheme(<Text variant="critical">Hello</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component text transformed', () => {
  const component = createWithTheme(
    <Text textTransform="uppercase">Hello</Text>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Text component wrapped', () => {
  const component = createWithTheme(<Text wrap>Hello</Text>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

// test('A Text component aligned', () => {
//   const component = createWithTheme(<Text textAlign="right">Hello</Text>)
//   const tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('A Text component decorated', () => {
  const component = createWithTheme(
    <Text textDecoration="line-through">Hello</Text>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
