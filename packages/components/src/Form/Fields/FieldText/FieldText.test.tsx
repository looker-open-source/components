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
import { FieldText } from './FieldText'

test('A FieldText with default label', () => {
  assertSnapshot(<FieldText id="FieldTextID" label="👍" />)
})

test('A FieldText with label inline', () => {
  assertSnapshot(<FieldText id="FieldTextID" inline label="👍" />)
})

test('A FieldText required', () => {
  const wrapper = mountWithTheme(
    <FieldText id="FieldTextID" label="👍" required />
  )

  expect(wrapper.text()).toMatch(`👍 *`)
})

test('A FieldText disabled', () => {
  const wrapper = mountWithTheme(
    <FieldText disabled id="FieldTextID" label="👍" />
  )
  wrapper.find('input').html().includes('disabled=""')
})

test('A FieldText with description', () => {
  const wrapper = mountWithTheme(
    <FieldText
      description="no vegetables allowed"
      id="FieldTextID"
      label="Text Input"
      placeholder="placeholder"
    />
  )
  expect(wrapper.text()).toMatch(`Text Inputno vegetables allowed`)
})

test('A FieldText with detail', () => {
  const wrapper = mountWithTheme(
    <FieldText
      detail="5/50"
      id="FieldTextID"
      label="hello"
      placeholder="placeholder"
    />
  )
  expect(wrapper.text()).toMatch(`hello5/50`)
})

test('A FieldText with description has proper aria setup', () => {
  const description = 'This is a description'

  const { container, getByDisplayValue } = renderWithTheme(
    <FieldText id="test" defaultValue="example" description={description} />
  )

  const input = getByDisplayValue('example')
  const id = input.getAttribute('aria-describedby')
  expect(id).toBeDefined()

  const describedBy = container.querySelector(`#${id}`)
  expect(describedBy).toHaveTextContent(description)
})

test('A FieldText with error has proper aria setup', () => {
  const errorMessage = 'This is an error'

  const { container, getByDisplayValue } = renderWithTheme(
    <FieldText
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

test('FieldText supports onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mountWithTheme(
    <FieldText id="FieldTextID" onChange={handleChange} />
  )

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
