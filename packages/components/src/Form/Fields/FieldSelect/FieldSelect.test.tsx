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

import { mount, render } from 'enzyme'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import {
  createWithTheme,
  renderWithTheme,
  assertSnapshot,
} from '@looker/components-test-utils'

import { theme } from '@looker/design-tokens'
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
  const wrapper = render(
    <ThemeProvider theme={theme}>
      <FieldSelect
        label="👍"
        name="thumbsUp"
        id="thumbs-up"
        value="foobar"
        options={[{ label: 'Foobar', value: 'foobar' }]}
      />
    </ThemeProvider>
  )

  const input = wrapper.find('input')
  expect(input.prop('value')).toEqual('Foobar')
})

test('Should trigger onChange handler', () => {
  const handleChange = jest.fn()

  const wrapper = mount(
    <ThemeProvider theme={theme}>
      <FieldSelect
        label="👍"
        name="thumbsUp"
        id="thumbs-up"
        value="foobar"
        onChange={handleChange}
      />
    </ThemeProvider>
  )

  wrapper.find('input').simulate('click')
  wrapper
    .find('li')
    .at(0)
    .simulate('click')
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
      alignValidationMessage="bottom"
    />
  )
  expect(getByLabelText('thumbs up')).toBeVisible()
  expect(getByText('This is an error')).toBeVisible()
})

test('A FieldSelect with an error validation aligned to the left', () => {
  const component = createWithTheme(
    <FieldSelect
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ message: 'This is an error', type: 'error' }}
      alignValidationMessage="left"
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('A FieldSelect with an error validation aligned to the right', () => {
  const component = createWithTheme(
    <FieldSelect
      label="👍"
      name="thumbsUp"
      id="thumbs-up"
      validationMessage={{ message: 'This is an error', type: 'error' }}
      alignValidationMessage="right"
    />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
