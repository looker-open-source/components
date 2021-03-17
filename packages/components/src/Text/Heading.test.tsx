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
import { assertSnapshot } from '@looker/components-test-utils'
import { Heading } from './Heading'

describe('Heading', () => {
  test('A default Heading', () => assertSnapshot(<Heading>🥑</Heading>))

  test('A <h1> Heading', () => assertSnapshot(<Heading as="h1">🥑</Heading>))

  test('A <h1> Heading sized to <h2>', () =>
    assertSnapshot(
      <Heading as="h1" fontSize="xlarge">
        🥑
      </Heading>
    ))

  test('A Heading to bold', () =>
    assertSnapshot(
      <Heading fontSize="large" fontWeight="bold">
        🥑
      </Heading>
    ))

  test('A Heading transformed', () =>
    assertSnapshot(<Heading textTransform="capitalize">🥑</Heading>))

  test('A Heading with variant', () =>
    assertSnapshot(<Heading color="subdued">🥑</Heading>))

  test('A Heading truncated', () =>
    assertSnapshot(<Heading truncate>🥑</Heading>))

  test('A Heading with multiline truncate', () =>
    assertSnapshot(<Heading truncateLines={2}>🥑</Heading>))
})
