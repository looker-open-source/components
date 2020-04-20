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
import { FieldToggleSwitch } from './FieldToggleSwitch'

test('A FieldToggleSwitch', () => {
  assertSnapshot(<FieldToggleSwitch id="FieldToggleSwitchID" label="👍" />)
})

test('A FieldToggleSwitch turned on', () => {
  assertSnapshot(
    <FieldToggleSwitch id="FieldToggleSwitchID" label="👍" on={true} />
  )
})

test('A FieldToggleSwitch with error has proper aria setup', () => {
  const errorMessage = 'This is an error'

  const { container, getByDisplayValue } = renderWithTheme(
    <FieldToggleSwitch
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

test('A FieldToggleSwitch disabled', () => {
  const wrapper = mountWithTheme(
    <FieldToggleSwitch
      disabled
      id="FieldToggleSwitchID"
      label="Toggle Switch"
    />
  )
  wrapper.find('input').html().includes('disabled=""')
})

test('A FieldToggleSwitch required', () => {
  const wrapper = mountWithTheme(
    <FieldToggleSwitch
      id="FieldToggleSwitchID"
      label="Toggle Switch"
      required
    />
  )
  expect(wrapper.text()).toMatch(`Toggle Switch required`)
})
