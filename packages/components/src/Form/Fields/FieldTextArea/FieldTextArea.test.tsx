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
import { assertSnapshot, renderWithTheme } from '@looker/components-test-utils'
import { fireEvent } from '@testing-library/react'
import { FieldTextArea } from './FieldTextArea'

test('A FieldTextArea with default label', () => {
  assertSnapshot(<FieldTextArea id="FieldTextAreaID" label="👍" />)
})

test('A FieldTextArea with label inline', () => {
  assertSnapshot(<FieldTextArea id="FieldTextAreaID" inline label="👍" />)
})

test('A FieldTextArea required with default label', () => {
  assertSnapshot(<FieldTextArea id="FieldTextAreaID" label="👍" required />)
})

test('A FieldTextArea required  with label inline', () => {
  assertSnapshot(
    <FieldTextArea id="FieldTextAreaID" inline label="👍" required />
  )
})

test('A FieldTextArea disabled with default label', () => {
  assertSnapshot(<FieldTextArea disabled id="FieldTextAreaID" label="👍" />)
})

test('A FieldTextArea disabled  with label inline', () => {
  assertSnapshot(
    <FieldTextArea disabled id="FieldTextAreaID" inline label="👍" />
  )
})

test('A FieldTextArea with description and with default label', () => {
  assertSnapshot(
    <FieldTextArea
      description="no vegetables allowed"
      id="FieldTextAreaID"
      label="Text Input"
      placeholder="placeholder"
    />
  )
})

test('A FieldTextArea with description and with label inline', () => {
  assertSnapshot(
    <FieldTextArea
      description="no vegetables allowed"
      id="FieldTextAreaID"
      inline
      label="Text Input"
      placeholder="placeholder"
    />
  )
})

test('A FieldTextArea with detail and with default label', () => {
  assertSnapshot(
    <FieldTextArea
      detail="5/50"
      id="FieldTextAreaID"
      label="hello"
      placeholder="placeholder"
    />
  )
})

test('A FieldTextArea with detail and  with label inline', () => {
  assertSnapshot(
    <FieldTextArea
      detail="5/50"
      id="FieldTextAreaID"
      inline
      label="hello"
      placeholder="placeholder"
    />
  )
})

test('A FieldTextArea with validationMessage and with default label', () => {
  assertSnapshot(
    <FieldTextArea
      id="FieldTextAreaID"
      label="hello"
      validationMessage={{ message: 'validation Message', type: 'error' }}
      placeholder="placeholder"
    />
  )
})

test('A FieldTextArea with validationMessage and  with label inline', () => {
  assertSnapshot(
    <FieldTextArea
      id="FieldTextAreaID"
      inline
      label="hello"
      validationMessage={{ message: 'validation Message', type: 'error' }}
      placeholder="placeholder"
    />
  )
})

test('FieldTextArea supports onChange handler', () => {
  const onChangeMock = jest.fn()
  const { getByLabelText } = renderWithTheme(
    <FieldTextArea
      id="FieldTextAreaID"
      inline
      label="Background Color"
      validationMessage={{ message: 'validation Message', type: 'error' }}
      onChange={onChangeMock}
      placeholder="placeholder"
    />
  )
  const input = getByLabelText('Background Color')
  fireEvent.change(input, { target: { value: '#FFFF00' } })
  expect(onChangeMock).toHaveBeenCalledWith({
    currentTarget: { value: '#FFFF00' },
    target: { value: '#FFFF00' },
  })
})
