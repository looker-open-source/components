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
import { mountWithTheme, renderWithTheme } from '@looker/components-test-utils'
import { FieldTime } from './FieldTime'

test('FieldTime renders and displays label', () => {
  const wrapper = mountWithTheme(
    <FieldTime defaultValue="14:34" id="FieldTimeID" label="Test Label" />
  )

  expect(wrapper.text()).toMatch(`Test Label`)
})

test('FieldTime should accept detail and description attributes', () => {
  const { getByLabelText } = renderWithTheme(
    <FieldTime
      defaultValue="14:34"
      description="this is the description"
      detail="5/50"
      id="FieldTimeID"
      label="Label"
    />
  )

  const input = getByLabelText('Label')
  expect(input.getAttribute('detail')).toBeDefined()
  expect(input.getAttribute('description')).toBeDefined()
})

test('FieldTime should accept a disabled prop', () => {
  const { getByLabelText } = renderWithTheme(
    <FieldTime
      defaultValue="14:34"
      disabled
      id="FieldTimeID"
      label="Disabled Label"
    />
  )

  const input = getByLabelText('Disabled Label')
  expect(input.getAttribute('disabled')).toBeDefined()
})

test('FieldTime should accept required attributes', () => {
  const { getByText } = renderWithTheme(
    <FieldTime
      defaultValue="14:34"
      id="FieldTimeID"
      label="Required Label"
      required
    />
  )
  expect(getByText('required')).toBeVisible()
})

test('FieldTime should display error message', () => {
  const errorMessage = 'This is an error'

  const { getByText } = renderWithTheme(
    <FieldTime
      defaultValue="14:34"
      id="FieldTimeID"
      label="Validation Label"
      validationMessage={{ message: errorMessage, type: 'error' }}
    />
  )

  expect(getByText('This is an error')).toBeVisible()
})
