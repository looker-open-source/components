/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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
import { createWithTheme, mountWithTheme } from '@looker/components-test-utils'
import { Label } from '../../Label/Label'
import { FieldCheckbox } from './FieldCheckbox'

test('A FieldCheckbox', () => {
  const component = createWithTheme(
    <FieldCheckbox label="👍" name="thumbsUp" id="thumbs-up" />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A FieldCheckbox with checked value', () => {
  const component = createWithTheme(
    <FieldCheckbox label="👍" name="thumbsUp" id="thumbs-up" checked />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A required FieldCheckbox', () => {
  const component = createWithTheme(
    <FieldCheckbox label="👍" name="thumbsUp" id="thumbs-up" required />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A FieldCheckbox with an error validation aligned to the bottom', () => {
  const component = mountWithTheme(
    <FieldCheckbox
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ message: 'This is an error', type: 'error' }}
      alignValidationMessage="bottom"
    />
  )
  expect(component.find(Label).props().htmlFor).toEqual(
    component.find('input').props().id
  )
})
