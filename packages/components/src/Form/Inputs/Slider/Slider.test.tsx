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

import React from 'react'
import { fireEvent } from '@testing-library/react'
import {
  // mountWithTheme,
  // assertSnapshot,
  renderWithTheme,
} from '@looker/components-test-utils'

import { Slider } from './Slider'

test('Enforces that input value can never go above `max` prop value', () => {
  const props = {
    max: 1,
    value: 2,
  }
  const { getByTestId } = renderWithTheme(<Slider {...props} />)
  const input = getByTestId('slider-input') as HTMLInputElement
  expect(parseInt(input.value)).toEqual(props.max)
})

test('Enforces that input value can never go below `min` prop value', () => {
  const props = {
    min: 5,
    value: 1,
  }

  const { getByTestId } = renderWithTheme(<Slider {...props} />)
  const input = getByTestId('slider-input') as HTMLInputElement
  expect(parseInt(input.value)).toEqual(props.min)
})

test('Slider with name and id', () => {
  const props = {
    id: 'Slip',
    name: 'Slide',
  }
  const { getByTestId } = renderWithTheme(<Slider {...props} />)
  const input = getByTestId('slider-input')
  expect(input).toHaveAttribute('id', props.id)
  expect(input).toHaveAttribute('name', props.name)
})

test('Slider input can be disabled', () => {
  const { getByTestId } = renderWithTheme(<Slider disabled />)
  const input = getByTestId('slider-input') as HTMLInputElement
  expect(input.disabled).toEqual(true)
})

test('Accessibility: Slider with aria-labeledby and <label>', () => {
  const { getByLabelText, getByTestId } = renderWithTheme(
    <>
      <label id="some-id">Slider Label</label>
      <Slider aria-labelledby="some-id" />
    </>
  )

  expect(getByLabelText('Slider Label')).toEqual(getByTestId('slider-input'))
})

test('Slider passes change event to optional onChange handler', () => {
  const handleChange = jest.fn()
  const { getByTestId } = renderWithTheme(
    <Slider min={0} max={10} onChange={handleChange} />
  )

  expect(handleChange).toHaveBeenCalledTimes(0)

  fireEvent.change(getByTestId('slider-input'), {
    target: { value: 10 },
  })

  expect(handleChange).toHaveBeenCalledTimes(1)
})

test('renders focus styles on keypress', () => {
  const { getByTestId } = renderWithTheme(<Slider />)

  fireEvent.keyUp(getByTestId('container'), { key: 'Tab', keyCode: 9 })

  expect(getByTestId('slider-input')).toMatchSnapshot()
})
