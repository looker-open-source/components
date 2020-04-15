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

import { TextArea } from './TextArea'

test('TextArea default', () => {
  assertSnapshot(<TextArea id="TextAreaID" />)
})

test('TextArea with placeholder', () => {
  assertSnapshot(
    <TextArea id="TextAreaID" placeholder="this is a placeholder" />
  )
})

test('TextArea should accept disabled', () => {
  assertSnapshot(<TextArea disabled id="TextAreaID" />)
})

test('TextArea with an error validation', () => {
  assertSnapshot(<TextArea id="TextAreaID" validationType="error" />)
})

test('TextArea resizes with prop resize = true', () => {
  assertSnapshot(<TextArea id="TextAreaID" resize />)
})

test('TextArea resizes with prop resize = false', () => {
  assertSnapshot(<TextArea id="TextAreaID" resize={false} />)
})

test('TextArea resizes with prop resize = both', () => {
  assertSnapshot(<TextArea id="TextAreaID" resize="both" />)
})

test('TextArea resizes with prop resize = none', () => {
  assertSnapshot(<TextArea id="TextAreaID" resize="none" />)
})

test('TextArea resizes with prop resize = horizontal', () => {
  assertSnapshot(<TextArea id="TextAreaID" resize="horizontal" />)
})

test('TextArea resizes with prop resize = vertical', () => {
  assertSnapshot(<TextArea id="TextAreaID" resize="vertical" />)
})
