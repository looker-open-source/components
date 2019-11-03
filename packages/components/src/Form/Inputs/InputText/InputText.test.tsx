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

import { InputText } from './InputText'

beforeEach(() => {
  global.console.warn = jest.fn()
})

afterEach(() => {
  jest.clearAllMocks()
})

test('InputText default', () => {
  assertSnapshot(<InputText />)
})

test('InputText with name and id', () => {
  assertSnapshot(<InputText name="Bob" id="Bobby" />)
})

test('InputText should accept disabled', () => {
  assertSnapshot(<InputText disabled />)
})

test('InputText with a placeholder', () => {
  assertSnapshot(<InputText placeholder="I am a placeholder" />)
})

test('InputText should accept readOnly', () => {
  assertSnapshot(<InputText readOnly />)
})

test('InputText should accept required', () => {
  assertSnapshot(<InputText required />)
})

test('InputText with a value', () => {
  assertSnapshot(<InputText value="Some value" />)
})

test('InputText with aria-describedby', () => {
  assertSnapshot(<InputText aria-describedby="some-id" />)
})

test('InputText with an error validation', () => {
  assertSnapshot(<InputText validationType="error" />)
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++

  const wrapper = mountWithTheme(<InputText onChange={handleChange} />)

  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
