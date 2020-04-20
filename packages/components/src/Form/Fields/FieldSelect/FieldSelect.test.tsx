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
import {
  createWithTheme,
  mountWithTheme,
  renderWithTheme,
  assertSnapshot,
} from '@looker/components-test-utils'
import { FieldSelect } from './FieldSelect'

test('A FieldSelect', () => {
  assertSnapshot(<FieldSelect label="👍" name="thumbsUp" id="thumbs-up" />)
})

test('FieldSelect supports labelWeight', () => {
  assertSnapshot(
    <FieldSelect
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      labelFontWeight="normal"
    />
  )
})

test('Should accept a value', () => {
  const wrapper = mountWithTheme(
    <FieldSelect
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      value="foobar"
      options={[{ label: 'Foobar', value: 'foobar' }]}
    />
  )

  const input = wrapper.find('input')
  expect(input.prop('value')).toEqual('Foobar')
})

test('Should trigger onChange handler', () => {
  const handleChange = jest.fn()

  const wrapper = mountWithTheme(
    <FieldSelect
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      value="foobar"
      onChange={handleChange}
      options={[{ label: 'Foobar', value: 'foobar' }]}
    />
  )

  wrapper.find('input').simulate('mousedown')
  wrapper.find('li').at(0).simulate('click')
  expect(handleChange).toHaveBeenCalledTimes(1)
})

test('A required FieldSelect', () => {
  const component = createWithTheme(
    <FieldSelect label="👍" name="thumbsUp" id="thumbs-up" required />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A FieldSelect with an error validation aligned to the bottom', () => {
  const { getByLabelText, getByText } = renderWithTheme(
    <FieldSelect
      label="thumbs up"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ message: 'This is an error', type: 'error' }}
    />
  )
  expect(getByLabelText('thumbs up')).toBeVisible()
  expect(getByText('This is an error')).toBeVisible()
})

test('A FieldSelect with description has proper aria setup', () => {
  const description = 'This is a description'

  const { container, getByDisplayValue } = renderWithTheme(
    <FieldSelect id="test" defaultValue="example" description={description} />
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
    <FieldSelect
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

test('A FieldSelect with an error validation aligned to the right', () => {
  const component = createWithTheme(
    <FieldSelect
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ message: 'This is an error', type: 'error' }}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
