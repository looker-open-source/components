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
import { mountWithTheme, assertSnapshot } from '@looker/components-test-utils'

import { Select } from './Select'

test('Select default', () => {
  assertSnapshot(<Select id="default" />)
})

test('Select with name and id', () => {
  assertSnapshot(<Select name="Bob" id="Bobby" />)
})

test('Select should accept disabled', () => {
  assertSnapshot(<Select disabled id="disabled" />)
})

test('Select should accept empty options array', () => {
  assertSnapshot(<Select options={[]} id="empty-options" />)
})

test('Select with a placeholder', () => {
  assertSnapshot(<Select placeholder="I am a placeholder" id="placeholder" />)
})

test('Select placeholder option does not have a value', () => {
  const select = mountWithTheme(<Select placeholder="Boo!" id="no-value" />)
  expect(select.find('input').prop('value')).toEqual('')
})

test('Select should accept readOnly', () => {
  assertSnapshot(<Select readOnly id="read-only" />)
})

test('Select should accept required', () => {
  assertSnapshot(<Select required id="required" />)
})

test('Select with a value', () => {
  const options = [
    { data: '1', value: 'thing' },
    { data: '1.5', value: 'Some Value' },
    { data: '2', value: 'other' },
  ]
  assertSnapshot(
    <Select value="Some Value" options={options} id="value-and-options" />
  )
})

test('Select with aria-describedby', () => {
  assertSnapshot(<Select aria-describedby="some-id" />)
})

test('Select with an error validation', () => {
  assertSnapshot(<Select validationType="error" id="error" />)
})

test('Should trigger onChange handler', () => {
  const handleChange = jest.fn()

  const wrapper = mountWithTheme(
    <Select
      openOnFocus
      onSelect={handleChange}
      options={[{ value: 'foo' }, { value: 'bar' }]}
    />
  )

  wrapper.find('input').simulate('focus')
  wrapper.update()
  wrapper
    .find('li')
    .at(0)
    .simulate('click')
  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(handleChange).toHaveBeenCalledWith({ value: 'foo' })
})
