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
import { fireEvent } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { RangeSlider } from './RangeSlider'

const globalConsole = global.console

beforeEach(() => {
  global.console = {
    ...globalConsole,
    error: jest.fn(),
    warn: jest.fn(),
  }
})

afterEach(() => {
  jest.resetAllMocks()
  global.console = globalConsole
})

test('it selects the entire range by default', () => {
  const handleChange = jest.fn()
  renderWithTheme(<RangeSlider onChange={handleChange} min={5} max={100} />)
  expect(handleChange).toHaveBeenCalledWith([5, 100])
})

test('warns the developer if value prop falls outside of possible min/max range', () => {
  // eslint-disable-next-line no-console
  expect(console.warn).not.toHaveBeenCalled()
  const handleChange = jest.fn()
  renderWithTheme(
    <RangeSlider
      defaultValue={[0, 1000]}
      min={10}
      max={20}
      onChange={handleChange}
    />
  )
  // eslint-disable-next-line no-console
  expect(console.warn).toHaveBeenCalled()
  expect(handleChange).toHaveBeenCalledWith([10, 20])
})

test('fires onChange callback when slider is clicked', () => {
  const handleChange = jest.fn()
  const { getByTestId } = renderWithTheme(
    <RangeSlider onChange={handleChange} />
  )
  const wrapper = getByTestId('range-slider-wrapper')
  fireEvent.mouseDown(wrapper)
  // TODO: mock getBoundingClientRect
  // TODO: properly simulate mouseMove event
  fireEvent.mouseMove(wrapper, { pageX: 300, pageY: 10 })
  expect(handleChange).toHaveBeenLastCalledWith([5, 10])
})

test('increments point by STEP value during keyboard navigation', () => {})

test('prevents range from going outside of min/max values', () => {})

test('disabled component does not respond to keyboard or mouse inputs', () => {})

test('readOnly component does not respond to keyboard or mouse inputs', () => {})
