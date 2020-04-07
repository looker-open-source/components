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
import { FieldTextArea } from './FieldTextArea'

test('A FieldTextArea with default label', () => {
  assertSnapshot(<FieldTextArea label="👍" />)
})

test('A FieldTextArea with label inline', () => {
  assertSnapshot(<FieldTextArea label="👍" inline />)
})

test('A FieldTextArea required with default label', () => {
  assertSnapshot(<FieldTextArea label="👍" required />)
})

test('A FieldTextArea required  with label inline', () => {
  assertSnapshot(<FieldTextArea label="👍" inline required />)
})

test('A FieldTextArea disabled with default label', () => {
  assertSnapshot(<FieldTextArea label="👍" disabled />)
})

test('A FieldTextArea disabled  with label inline', () => {
  assertSnapshot(<FieldTextArea label="👍" inline disabled />)
})

test('A FieldTextArea with description and with default label', () => {
  assertSnapshot(
    <FieldTextArea
      description="no vegetables allowed"
      label="Text Input"
      placeholder="placeholder"
    />
  )
})

test('A FieldTextArea with description and with label inline', () => {
  assertSnapshot(
    <FieldTextArea
      description="no vegetables allowed"
      inline
      label="Text Input"
      placeholder="placeholder"
    />
  )
})

test('A FieldTextArea with detail and with default label', () => {
  assertSnapshot(
    <FieldTextArea label="hello" detail="5/50" placeholder="placeholder" />
  )
})

test('A FieldTextArea with detail and  with label inline', () => {
  assertSnapshot(
    <FieldTextArea
      label="hello"
      inline
      detail="5/50"
      placeholder="placeholder"
    />
  )
})

test('A FieldTextArea with validationMessage and with default label', () => {
  assertSnapshot(
    <FieldTextArea
      label="hello"
      validationMessage={{ message: 'validation Message', type: 'error' }}
      placeholder="placeholder"
    />
  )
})

test('A FieldTextArea with validationMessage and  with label inline', () => {
  assertSnapshot(
    <FieldTextArea
      label="hello"
      inline
      validationMessage={{ message: 'validation Message', type: 'error' }}
      placeholder="placeholder"
    />
  )
})
