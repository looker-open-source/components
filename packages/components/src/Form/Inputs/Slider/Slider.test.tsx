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
import { mountWithTheme, assertSnapshot } from 'looker-components-test-utils'

import { Slider } from './Slider'

test('Slider default', () => {
  assertSnapshot(<Slider />)
})

test('Slider with min and max', () => {
  assertSnapshot(<Slider min={1} max={11} step={0.01} value={11} />)
})

test('Slider with name and id', () => {
  assertSnapshot(<Slider name="Slip" id="Slide" />)
})

test('Slider should accept disabled', () => {
  assertSnapshot(<Slider disabled />)
})

test('Slider with aria-describedby', () => {
  assertSnapshot(<Slider aria-describedby="some-id" />)
})

test('Should trigger onChange handler', () => {
  let counter = 0
  const handleChange = () => counter++
  const wrapper = mountWithTheme(<Slider onChange={handleChange} />)
  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(counter).toEqual(1)
})
