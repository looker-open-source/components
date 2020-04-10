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
import { assertSnapshot, mountWithTheme } from '@looker/components-test-utils'
import { FieldTextArea } from './FieldTextArea'

test('A FieldTextArea with default label', () => {
  assertSnapshot(<FieldTextArea id="FieldTextAreaID" label="👍" />)
})

test('A FieldTextArea with label inline', () => {
  assertSnapshot(<FieldTextArea id="FieldTextAreaID" inline label="👍" />)
})

test('A FieldTextArea required', () => {
  const wrapper = mountWithTheme(
    <FieldTextArea id="FieldTextAreaID" label="👍" required />
  )

  expect(wrapper.text()).toMatch(`👍 *`)
})

test('A FieldTextArea disabled', () => {
  const wrapper = mountWithTheme(
    <FieldTextArea disabled id="FieldTextAreaID" label="👍" />
  )
  wrapper.find('input:disabled')
})

test('A FieldTextArea with description', () => {
  const wrapper = mountWithTheme(
    <FieldTextArea
      description="no vegetables allowed"
      id="FieldTextAreaID"
      label="Text Input"
      placeholder="placeholder"
    />
  )
  expect(wrapper.text()).toMatch(`Text Inputno vegetables allowed`)
})

test('A FieldTextArea with detail', () => {
  const wrapper = mountWithTheme(
    <FieldTextArea
      detail="5/50"
      id="FieldTextAreaID"
      label="hello"
      placeholder="placeholder"
    />
  )
  expect(wrapper.text()).toMatch(`hello5/50`)
})

test('A FieldTextArea with validationMessage', () => {
  const wrapper = mountWithTheme(
    <FieldTextArea
      id="FieldTextAreaID"
      label="hello"
      validationMessage={{
        message: 'validation Message',
        type: 'error',
      }}
      placeholder="placeholder"
    />
  )
  expect(wrapper.text()).toMatch(`helloWarningvalidation Message`)
})

test('FieldTextArea supports onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mountWithTheme(
    <FieldTextArea id="FieldTextAreaID" onChange={handleChange} />
  )

  wrapper.find('textarea').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
