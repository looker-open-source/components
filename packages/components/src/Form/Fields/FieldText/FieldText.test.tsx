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
  assertSnapshot,
} from '@looker/components-test-utils'
import { Label } from '../../Label/Label'
import { FieldText } from './FieldText'

test('A FieldText', () => {
  assertSnapshot(<FieldText label="👍" name="thumbsUp" id="thumbs-up" />)
})

test('FieldText supports labelWeight', () => {
  assertSnapshot(
    <FieldText
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      labelFontWeight="normal"
    />
  )
})

test('Should accept a value', () => {
  const wrapper = mountWithTheme(
    <FieldText
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      value="foobar"
      readOnly
    />
  )

  const input = wrapper.find('input')
  expect(input.prop('value')).toEqual('foobar')
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mountWithTheme(
    <FieldText
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      value="foobar"
      onChange={handleChange}
    />
  )

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})

test('A required FieldText', () => {
  const component = createWithTheme(
    <FieldText label="👍" name="thumbsUp" id="thumbs-up" required />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A FieldText with an error validation aligned to the bottom', () => {
  const id = 'thumbs-up'
  const component = mountWithTheme(
    <FieldText
      label="👍"
      name="thumbsUp"
      id={id}
      validationMessage={{ message: 'This is an error', type: 'error' }}
    />
  )

  expect(component.find(Label).props().htmlFor).toEqual(id)
})

test('A FieldText with an error validation aligned to the left', () => {
  const id = 'thumbs-up'
  const component = createWithTheme(
    <FieldText
      label="👍"
      name="thumbsUp"
      id={id}
      validationMessage={{ message: 'This is an error', type: 'error' }}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test("A FieldText htmlFor attribute references input's name", () => {
  const id = 'thumbs-up'
  const component = mountWithTheme(
    <FieldText
      label="👍"
      name="thumbsUp"
      id={id}
      validationMessage={{ message: 'This is an error', type: 'error' }}
    />
  )

  expect(component.find(Label).props().htmlFor).toEqual(id)
})

test('A FieldText with an error validation aligned to the right', () => {
  const component = createWithTheme(
    <FieldText
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ message: 'This is an error', type: 'error' }}
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
