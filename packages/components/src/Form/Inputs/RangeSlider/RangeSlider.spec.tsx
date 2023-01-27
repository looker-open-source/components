/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import { act, fireEvent, screen } from '@testing-library/react'
import {
  renderWithTheme,
  withThemeProvider,
} from '@looker/components-test-utils'
import { RangeSlider } from './RangeSlider'
import RerenderRepro from './stories/FilterRangeSlider'

const globalConsole = global.console
/* eslint-disable-next-line @typescript-eslint/unbound-method */
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect

beforeEach(() => {
  jest.useFakeTimers()
  global.console = {
    ...globalConsole,
    warn: jest.fn(),
  }
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
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
  jest.resetAllMocks()
  global.console = globalConsole
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect
})

const runTimers = () =>
  act(() => {
    jest.runOnlyPendingTimers()
  })

test('it selects the entire range by default', () => {
  const handleChange = jest.fn()
  renderWithTheme(<RangeSlider onChange={handleChange} min={5} max={100} />)

  const minThumb = screen.getByLabelText('Minimum Value')
  const maxThumb = screen.getByLabelText('Maximum Value')
  expect(minThumb).toHaveAttribute('aria-valuenow', '5')
  expect(maxThumb).toHaveAttribute('aria-valuenow', '100')
})

test('warns the developer if value prop falls outside of possible min/max range', () => {
  // eslint-disable-next-line no-console
  expect(console.warn).not.toHaveBeenCalled()
  const handleChange = jest.fn()
  const { rerender } = renderWithTheme(
    <RangeSlider value={[0, 1000]} min={10} max={20} onChange={handleChange} />
  )
  // eslint-disable-next-line no-console
  expect(console.warn).toHaveBeenCalled()
  expect(handleChange).toHaveBeenCalledWith([10, 20])

  rerender(
    withThemeProvider(
      <RangeSlider onChange={handleChange} min={10} max={20} value={[-1, 1]} />
    )
  )

  expect(handleChange).toHaveBeenCalledWith([10, 10])
})

test('fires onChange callback on mouseMove', () => {
  const handleChange = jest.fn()
  renderWithTheme(<RangeSlider onChange={handleChange} />)

  const wrapper = screen.getByTestId('range-slider-wrapper')
  fireEvent.mouseDown(wrapper)
  runTimers()
  fireEvent.mouseMove(wrapper, { clientX: 100, clientY: 10 })
  fireEvent.mouseUp(wrapper)
  runTimers()

  expect(handleChange).toHaveBeenLastCalledWith([3, 10])
})

test('fires onChange callback on touchMove', () => {
  const handleChange = jest.fn()
  renderWithTheme(<RangeSlider onChange={handleChange} />)

  const wrapper = screen.getByTestId('range-slider-wrapper')
  fireEvent.touchStart(wrapper)
  runTimers()
  fireEvent.touchMove(wrapper, { touches: [{ clientX: 100, clientY: 10 }] })
  fireEvent.touchEnd(wrapper)
  runTimers()

  expect(handleChange).toHaveBeenLastCalledWith([3, 10])
})

test('increments point by STEP value during keyboard navigation', () => {
  const handleChange = jest.fn()
  renderWithTheme(
    <RangeSlider onChange={handleChange} min={0} max={100} step={10} />
  )

  const minThumb = screen.getByLabelText('Minimum Value')
  const maxThumb = screen.getByLabelText('Maximum Value')
  expect(minThumb).toHaveAttribute('aria-valuenow', '0')
  expect(maxThumb).toHaveAttribute('aria-valuenow', '100')

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
    renderWithTheme(<RangeSlider onChange={handleChange} readOnly />)

    const wrapper = screen.getByTestId('range-slider-wrapper')
    fireEvent.mouseDown(wrapper)
    runTimers()
    fireEvent.mouseMove(wrapper, { clientX: 100, clientY: 10 })
    expect(handleChange).not.toHaveBeenCalled()
  })

  test('readOnly component does not respond to KEYBOARD input', () => {
    const handleChange = jest.fn()
    renderWithTheme(
      <RangeSlider onChange={handleChange} min={0} max={10} readOnly />
    )

    const minThumb = screen.getByLabelText('Minimum Value')

    minThumb.focus()
    fireEvent.keyDown(document.activeElement as Element, { key: 'ArrowUp' })
    expect(handleChange).not.toHaveBeenCalled()
  })
})

describe('disabled prop', () => {
  test('disabled component does not respond to MOUSE input', () => {
    const handleChange = jest.fn()
    renderWithTheme(<RangeSlider onChange={handleChange} disabled />)

    const wrapper = screen.getByTestId('range-slider-wrapper')
    fireEvent.mouseDown(wrapper)
    runTimers()
    fireEvent.mouseMove(wrapper, { clientX: 100, clientY: 10 })
    expect(handleChange).not.toHaveBeenCalled()
  })

  test('disabled component does not respond to KEYBOARD input', () => {
    const handleChange = jest.fn()
    renderWithTheme(
      <RangeSlider onChange={handleChange} min={0} max={10} disabled />
    )

    const minThumb = screen.getByLabelText('Minimum Value')

    minThumb.focus()
    fireEvent.keyDown(document.activeElement as Element, { key: 'ArrowUp' })
    expect(handleChange).not.toHaveBeenCalled()
  })

  test('disabled component does not respond to TOUCH input', () => {
    const handleChange = jest.fn()
    renderWithTheme(<RangeSlider onChange={handleChange} disabled />)

    const wrapper = screen.getByTestId('range-slider-wrapper')
    fireEvent.touchStart(wrapper)
    runTimers()
    fireEvent.touchMove(wrapper, { touches: [{ clientX: 100, clientY: 10 }] })
    expect(handleChange).not.toHaveBeenCalled()
  })

  // TODO un-skip this test after fixing useEffect re-render issue (properly)
  test('intermediate re-render does not cause value to revert', () => {
    renderWithTheme(<RerenderRepro />)

    const minThumb = screen.getByLabelText('Minimum Value')
    const maxThumb = screen.getByLabelText('Maximum Value')

    expect(minThumb).toHaveAttribute('aria-valuenow', '0')
    expect(maxThumb).toHaveAttribute('aria-valuenow', '10')

    maxThumb.focus()
    fireEvent.keyDown(maxThumb, { key: 'ArrowRight' })

    expect(minThumb).toHaveAttribute('aria-valuenow', '0')
    expect(maxThumb).toHaveAttribute('aria-valuenow', '11')
  })
})
