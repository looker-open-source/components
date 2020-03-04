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

import 'jest-styled-components'
import React from 'react'
import { assertSnapshot } from '@looker/components-test-utils'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  test('A default spinner', () => {
    assertSnapshot(<Spinner />)
  })

  test('Spinner can have n number of markers', () => {
    assertSnapshot(<Spinner markers={20} />)
  })

  test('Spinner makers radius can be adjusted', () => {
    assertSnapshot(<Spinner markerRadius={30} />)
  })

  test('Spinner speed can be set', () => {
    assertSnapshot(<Spinner speed={2000} />)
  })

  test('Spinner can change markger color', () => {
    assertSnapshot(<Spinner color="red" />)
  })

  test('Spinner can be resized', () => {
    assertSnapshot(<Spinner size={200} />)
  })
})
