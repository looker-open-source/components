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
const globalRequestAnimationFrame = global.requestAnimationFrame
/* eslint-disable-next-line @typescript-eslint/unbound-method */
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect

beforeEach(() => {
  global.console = {
    ...globalConsole,
    error: jest.fn(),
    warn: jest.fn(),
  }
  global.requestAnimationFrame = jest
    .fn()
    .mockImplementation((cb: Function) => cb())
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  Element.prototype.getBoundingClientRect = jest.fn(() => {
    return {
      bottom: 0,
      height: 30,
      left: 0,
      right: 0,
      toJSON: jest.fn(),
      top: 0,
      width: 360,
      x: 0,
      y: 0,
    }
  })
})

afterEach(() => {
  jest.resetAllMocks()
  global.console = globalConsole
  global.requestAnimationFrame = globalRequestAnimationFrame
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect
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

test('fires onChange callback on mouseMove', () => {
  const handleChange = jest.fn()
  const { getByTestId } = renderWithTheme(
    <RangeSlider onChange={handleChange} />
  )

  const wrapper = getByTestId('range-slider-wrapper')
  fireEvent.mouseDown(wrapper)
  fireEvent.mouseMove(wrapper, { clientX: 100, clientY: 10 })
  fireEvent.mouseUp(wrapper)

  expect(handleChange).toHaveBeenLastCalledWith([3, 10])
})

test('fires onChange callback on touchMove', () => {
  const handleChange = jest.fn()
  const { getByTestId } = renderWithTheme(
    <RangeSlider onChange={handleChange} />
  )

  const wrapper = getByTestId('range-slider-wrapper')
  fireEvent.touchStart(wrapper)
  fireEvent.touchMove(wrapper, { touches: [{ clientX: 100, clientY: 10 }] })
  fireEvent.touchEnd(wrapper)

  expect(handleChange).toHaveBeenLastCalledWith([3, 10])
})

test('increments point by STEP value during keyboard navigation', () => {
  const handleChange = jest.fn()
  const { getByLabelText } = renderWithTheme(
    <RangeSlider onChange={handleChange} min={0} max={100} step={10} />
  )

  const minThumb = getByLabelText('Minimum Value')
  const maxThumb = getByLabelText('Maximum Value')
  expect(handleChange).toHaveBeenCalledWith([0, 100])

  minThumb.focus()
  fireEvent.keyDown(document.activeElement as Element, { key: 'ArrowUp' })
  expect(handleChange).toHaveBeenLastCalledWith([10, 100])
  fireEvent.keyDown(document.activeElement as Element, { key: 'ArrowRight' })
  expect(handleChange).toHaveBeenLastCalledWith([20, 100])

  maxThumb.focus()
  fireEvent.keyDown(document.activeElement as Element, { key: 'ArrowLeft' })
  expect(handleChange).toHaveBeenLastCalledWith([20, 90])
  fireEvent.keyDown(document.activeElement as Element, { key: 'ArrowDown' })
  expect(handleChange).toHaveBeenLastCalledWith([20, 80])
})

test('prevents value from going outside of min/max range', () => {
  const handleChange = jest.fn()
  renderWithTheme(
    <RangeSlider onChange={handleChange} min={9} max={10} value={[0, 100]} />
  )
  expect(handleChange).toHaveBeenCalledWith([9, 10])
})

describe('readOnly prop', () => {
  test('readOnly component does not respond to MOUSE input', () => {
    const handleChange = jest.fn()
    const { getByTestId } = renderWithTheme(
      <RangeSlider onChange={handleChange} readOnly />
    )

    expect(handleChange).toHaveBeenCalledWith([0, 10]) // initial render

    const wrapper = getByTestId('range-slider-wrapper')
    fireEvent.mouseDown(wrapper)
    fireEvent.mouseMove(wrapper, { clientX: 100, clientY: 10 })

    expect(handleChange).toHaveBeenLastCalledWith([0, 10]) // unchanged
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('readOnly component does not respond to KEYBOARD input', () => {
    const handleChange = jest.fn()
    const { getByLabelText } = renderWithTheme(
      <RangeSlider onChange={handleChange} min={0} max={10} readOnly />
    )

    const minThumb = getByLabelText('Minimum Value')
    expect(handleChange).toHaveBeenCalledWith([0, 10]) // initial render

    minThumb.focus()
    fireEvent.keyDown(document.activeElement as Element, { key: 'ArrowUp' })
    expect(handleChange).toHaveBeenLastCalledWith([0, 10]) // unchanged
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})

describe('disabled prop', () => {
  test('disabled component does not respond to MOUSE input', () => {
    const handleChange = jest.fn()
    const { getByTestId } = renderWithTheme(
      <RangeSlider onChange={handleChange} disabled />
    )

    expect(handleChange).toHaveBeenCalledWith([0, 10]) // initial render

    const wrapper = getByTestId('range-slider-wrapper')
    fireEvent.mouseDown(wrapper)
    fireEvent.mouseMove(wrapper, { clientX: 100, clientY: 10 })

    expect(handleChange).toHaveBeenLastCalledWith([0, 10]) // unchanged
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('disabled component does not respond to KEYBOARD input', () => {
    const handleChange = jest.fn()
    const { getByLabelText } = renderWithTheme(
      <RangeSlider onChange={handleChange} min={0} max={10} disabled />
    )

    const minThumb = getByLabelText('Minimum Value')
    expect(handleChange).toHaveBeenCalledWith([0, 10]) // initial render

    minThumb.focus()
    fireEvent.keyDown(document.activeElement as Element, { key: 'ArrowUp' })
    expect(handleChange).toHaveBeenLastCalledWith([0, 10]) // unchanged
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('disabled component does not respond to TOUCH input', () => {
    const handleChange = jest.fn()
    const { getByTestId } = renderWithTheme(
      <RangeSlider onChange={handleChange} disabled />
    )

    expect(handleChange).toHaveBeenCalledWith([0, 10]) // initial render

    const wrapper = getByTestId('range-slider-wrapper')
    fireEvent.touchStart(wrapper)
    fireEvent.touchMove(wrapper, { touches: [{ clientX: 100, clientY: 10 }] })

    expect(handleChange).toHaveBeenLastCalledWith([0, 10]) // unchanged
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
