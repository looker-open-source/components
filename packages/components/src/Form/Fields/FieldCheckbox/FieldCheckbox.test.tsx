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
import {
  assertSnapshot,
  mountWithTheme,
  renderWithTheme,
} from '@looker/components-test-utils'
import { FieldCheckbox } from './FieldCheckbox'

test('A FieldCheckbox', () => {
  assertSnapshot(
    <FieldCheckbox id="FieldCheckboxID" label="👍" name="thumbsUp" />
  )
})

test('A FieldCheckbox with checked value', () => {
  assertSnapshot(
    <FieldCheckbox
      defaultChecked
      id="FieldCheckboxID"
      label="👍"
      name="thumbsUp"
    />
  )
})

test('A required FieldCheckbox', () => {
  const wrapper = mountWithTheme(
    <FieldCheckbox id="FieldCheckboxID" label="👍" name="thumbsUp" required />
  )
  expect(wrapper.text()).toMatch(`👍 required`)
})

test('A disabled FieldCheckbox', () => {
  const wrapper = mountWithTheme(
    <FieldCheckbox disabled id="FieldCheckboxID" label="👍" name="thumbsUp" />
  )
  wrapper.find('input').html().includes('disabled=""')
})

test('A FieldCheckbox with error has proper aria setup', () => {
  const errorMessage = 'This is an error'

  const { container, getByDisplayValue } = renderWithTheme(
    <FieldCheckbox
      id="test"
      defaultValue="example"
      validationMessage={{ message: errorMessage, type: 'error' }}
    />
  )

  const input = getByDisplayValue('example')
  const id = input.getAttribute('aria-describedby')
  expect(id).toBeDefined()

  const describedBy = container.querySelector(`#${id}`)
  expect(describedBy).toHaveTextContent(errorMessage)
})
