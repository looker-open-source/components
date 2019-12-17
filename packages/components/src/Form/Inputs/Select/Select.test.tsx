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
  assertSnapshot(<Select />)
})

test('Select with name and id', () => {
  assertSnapshot(<Select name="Bob" id="Bobby" />)
})

test('Select should accept disabled', () => {
  assertSnapshot(<Select disabled />)
})

test('Select should accept empty options array', () => {
  assertSnapshot(<Select options={[]} />)
})

test('Select with a placeholder', () => {
  assertSnapshot(<Select placeholder="I am a placeholder" />)
})

test('Select placeholder option does not have a value', () => {
  const select = mountWithTheme(<Select placeholder="Boo!" />)
  expect(select.find('option').prop('value')).toEqual('')
})

test('Select should accept readOnly', () => {
  assertSnapshot(<Select readOnly />)
})

test('Select should accept required', () => {
  assertSnapshot(<Select required />)
})

test('Select with a value', () => {
  const options = [
    { label: 'thing', value: '1' },
    { label: "Some Value's Label", value: 'Some Value' },
    { label: 'other', value: '2' },
  ]
  assertSnapshot(<Select value="Some Value" options={options} />)
})

test('Select with aria-describedby', () => {
  assertSnapshot(<Select aria-describedby="some-id" />)
})

test('Select with an error validation', () => {
  assertSnapshot(<Select validationType="error" />)
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mountWithTheme(<Select onChange={handleChange} />)

  wrapper.find('select').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
