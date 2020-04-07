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
import { FieldText } from './FieldText'

test('A FieldText with default label', () => {
  assertSnapshot(<FieldText label="👍" />)
})

test('A FieldText with label inline', () => {
  assertSnapshot(<FieldText label="👍" inline />)
})

test('A FieldText required with default label', () => {
  assertSnapshot(<FieldText label="👍" required />)
})

test('A FieldText required  with label inline', () => {
  assertSnapshot(<FieldText label="👍" inline required />)
})

test('A FieldText disabled with default label', () => {
  assertSnapshot(<FieldText label="👍" disabled />)
})

test('A FieldText disabled  with label inline', () => {
  assertSnapshot(<FieldText label="👍" inline disabled />)
})

test('A FieldText with description and with default label', () => {
  assertSnapshot(
    <FieldText
      description="no vegetables allowed"
      label="Text Input"
      placeholder="placeholder"
    />
  )
})

test('A FieldText with description and with label inline', () => {
  assertSnapshot(
    <FieldText
      description="no vegetables allowed"
      inline
      label="Text Input"
      placeholder="placeholder"
    />
  )
})

test('A FieldText with detail and with default label', () => {
  assertSnapshot(
    <FieldText label="hello" detail="5/50" placeholder="placeholder" />
  )
})

test('A FieldText with detail and  with label inline', () => {
  assertSnapshot(
    <FieldText label="hello" inline detail="5/50" placeholder="placeholder" />
  )
})

test('A FieldText with validationMessage and with default label', () => {
  assertSnapshot(
    <FieldText
      label="hello"
      validationMessage={{ message: 'validation Message', type: 'error' }}
      placeholder="placeholder"
    />
  )
})

test('A FieldText with validationMessage and  with label inline', () => {
  assertSnapshot(
    <FieldText
      label="hello"
      inline
      validationMessage={{ message: 'validation Message', type: 'error' }}
      placeholder="placeholder"
    />
  )
})
