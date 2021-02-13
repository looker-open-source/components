/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import React from 'react'
import { mountWithTheme, renderWithTheme } from '@looker/components-test-utils'
import { FieldTimeSelect } from './FieldTimeSelect'

test('FieldTimeSelect should associate label and input field', () => {
  const { getByLabelText } = renderWithTheme(
    <FieldTimeSelect
      label="Field Time Label"
      id="field-time-select"
      interval={10}
    />
  )
  expect(getByLabelText('Field Time Label').tagName).toEqual('INPUT')
})

test('FieldTimeSelect should accept required attributes', () => {
  const { getByText } = renderWithTheme(
    <FieldTimeSelect
      label="Label"
      id="field-time-select"
      interval={10}
      required
    />
  )
  expect(getByText('required')).toBeVisible()
})

test('FieldTimeSelect should display error message', () => {
  const errorMessage = 'This is an error'

  const { getByText } = renderWithTheme(
    <FieldTimeSelect
      id="field-time-select"
      interval={10}
      label="Label"
      validationMessage={{ message: errorMessage, type: 'error' }}
    />
  )

  expect(getByText('This is an error')).toBeVisible()
})

test('FieldTimeSelect Should trigger onChange handler', () => {
  const handleChange = jest.fn()

  const wrapper = mountWithTheme(
    <FieldTimeSelect
      label="Label"
      id="field-time-select"
      interval={10}
      onChange={handleChange}
    />
  )

  wrapper.find('input').simulate('mousedown')
  wrapper.find('li').at(0).simulate('click')
  expect(handleChange).toHaveBeenCalledTimes(1)
})
