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

import React from 'react'
import { mountWithTheme, renderWithTheme } from '@looker/components-test-utils'
import { FieldSelectMulti } from './FieldSelectMulti'

const FieldSelectMultiOptions = [
  { label: 'Apples', value: '1' },
  { label: 'Bananas', value: '2' },
  { label: 'Oranges', value: '3' },
]

test('FieldSelectMulti should accept detail and description attributes', () => {
  const { getByLabelText } = renderWithTheme(
    <FieldSelectMulti
      detail="5/50"
      description="this is the description"
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      options={FieldSelectMultiOptions}
    />
  )

  const input = getByLabelText('👍')
  expect(input.getAttribute('detail')).toBeDefined()
  expect(input.getAttribute('description')).toBeDefined()
})

test('FieldSelectMulti should accept a disabled prop', () => {
  const { getByLabelText } = renderWithTheme(
    <FieldSelectMulti
      disabled
      id="test"
      label="Test Label"
      name="test"
      options={FieldSelectMultiOptions}
    />
  )

  const input = getByLabelText('Test Label')
  expect(input.getAttribute('disabled')).toBeDefined()
})

test('FieldSelectMulti should accept required attributes', () => {
  const { getByText } = renderWithTheme(
    <FieldSelectMulti
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      options={FieldSelectMultiOptions}
      required
    />
  )
  expect(getByText('required')).toBeVisible()
})

test('FieldSelectMulti should display error message', () => {
  const errorMessage = 'This is an error'

  const { getByText } = renderWithTheme(
    <FieldSelectMulti
      id="testFieldSelectMulti"
      label="Label"
      name="test"
      options={FieldSelectMultiOptions}
      validationMessage={{ message: errorMessage, type: 'error' }}
    />
  )

  expect(getByText('This is an error')).toBeVisible()
})

test('FieldSelectMulti Should trigger onChange handler', () => {
  const handleChange = jest.fn()

  const wrapper = mountWithTheme(
    <FieldSelectMulti
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      onChange={handleChange}
      options={FieldSelectMultiOptions}
    />
  )

  wrapper.find('input').simulate('mousedown')
  wrapper.find('li').at(0).simulate('click')
  expect(handleChange).toHaveBeenCalledTimes(1)
})
