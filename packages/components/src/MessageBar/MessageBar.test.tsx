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
import { MessageBar } from './MessageBar'

test('Warning MessageBar', () => {
  assertSnapshot(
    <MessageBar intent="warning" id="test-message-bar">
      Warning
    </MessageBar>
  )
})

test('Error MessageBar', () => {
  assertSnapshot(
    <MessageBar intent="error" id="test-message-bar">
      Error
    </MessageBar>
  )
})

test('Info MessageBar', () => {
  assertSnapshot(
    <MessageBar intent="info" id="test-message-bar">
      Info
    </MessageBar>
  )
})

test('Confirmation MessageBar', () => {
  assertSnapshot(
    <MessageBar intent="confirmation" id="test-message-bar">
      Confirmation
    </MessageBar>
  )
})

test('MessageBar can be dismissed', () => {
  assertSnapshot(
    <MessageBar intent="info" id="test-message-bar" canDismiss>
      Info!
    </MessageBar>
  )
})
