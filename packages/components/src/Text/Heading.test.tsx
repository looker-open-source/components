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
import { Heading } from './Heading'

test('A default Heading', () => {
  const component = createWithTheme(<Heading>🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A <h1> Heading', () => {
  const component = createWithTheme(<Heading as="h1">🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A <h1> Heading sized to <h2>', () => {
  const component = createWithTheme(
    <Heading as="h1" fontSize="xlarge">
      🥑
    </Heading>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading to bold', () => {
  const component = createWithTheme(
    <Heading fontSize="large" fontWeight="bold">
      🥑
    </Heading>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading transformed', () => {
  const component = createWithTheme(
    <Heading textTransform="capitalize">🥑</Heading>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading with variant', () => {
  const component = createWithTheme(<Heading variant="subdued">🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading truncated', () => {
  const component = createWithTheme(<Heading truncate>🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A Heading with multiline truncate', () => {
  const component = createWithTheme(<Heading truncateLines={2}>🥑</Heading>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
