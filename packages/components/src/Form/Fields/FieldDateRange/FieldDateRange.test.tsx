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
import { FieldDateRange } from './FieldDateRange'

const realDateNow = Date.now.bind(global.Date)

beforeEach(() => {
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  global.Date.now = jest.fn(() => 1580517818172)
})

afterEach(() => {
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  global.Date.now = realDateNow
  jest.clearAllMocks()
})

test('FieldDateRange renders and displays label', () => {
  const wrapper = mountWithTheme(
    <FieldDateRange
      defaultValue={[new Date(Date.now()), new Date(Date.now())]}
      id="FieldDateRangeID"
      label="Test Label"
    />
  )

  expect(wrapper.text()).toMatch(`Test Label`)
})

test('FieldDateRange should accept detail and description attributes', () => {
  const { getByLabelText } = renderWithTheme(
    <FieldDateRange
      defaultValue={[new Date(Date.now()), new Date(Date.now())]}
      description="this is the description"
      detail="5/50"
      id="FieldDateRangeID"
      label="Label"
    />
  )

  const input = getByLabelText('Label')
  expect(input.getAttribute('detail')).toBeDefined()
  expect(input.getAttribute('description')).toBeDefined()
})

test('FieldDateRange should accept a disabled prop', () => {
  const { getByLabelText } = renderWithTheme(
    <FieldDateRange
      defaultValue={[new Date(Date.now()), new Date(Date.now())]}
      disabled
      id="FieldDateRangeID"
      label="Disabled Label"
    />
  )

  const input = getByLabelText('Disabled Label')
  expect(input.getAttribute('disabled')).toBeDefined()
})

test('FieldDateRange should accept required attributes', () => {
  const { getByText } = renderWithTheme(
    <FieldDateRange
      defaultValue={[new Date(Date.now()), new Date(Date.now())]}
      id="FieldDateRangeID"
      label="Required Label"
      required
    />
  )
  expect(getByText('required')).toBeVisible()
})

test('FieldDateRange should display error message', () => {
  const errorMessage = 'This is an error'

  const { getByText } = renderWithTheme(
    <FieldDateRange
      defaultValue={[new Date(Date.now()), new Date(Date.now())]}
      id="FieldDateRangeID"
      label="Validation Label"
      validationMessage={{ message: errorMessage, type: 'error' }}
    />
  )

  expect(getByText('This is an error')).toBeVisible()
})
