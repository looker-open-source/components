/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import { act, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { useRipple, UseRippleProps } from './useRipple'

const RippleComponent = (props: UseRippleProps) => {
  const {
    callbacks: { startBG, endBG, startFG, endFG },
    className,
    ref,
    rippleOffset,
    rippleScaleRange,
    rippleSize,
  } = useRipple(props)
  return (
    <div ref={ref}>
      <div data-testid="startBG" onClick={startBG} />
      <div data-testid="endBG" onClick={endBG} />
      <div data-testid="startFG" onClick={startFG} />
      <div data-testid="endFG" onClick={endFG} />
      <div data-testid="className">{className}</div>
      <div data-testid="rippleOffset">{rippleOffset}</div>
      <div data-testid="rippleScaleRange">{rippleScaleRange.join('-')}</div>
      <div data-testid="rippleSize">{rippleSize}</div>
    </div>
  )
}

/* eslint-disable-next-line @typescript-eslint/unbound-method */
const globalGetBoundingClientRect = Element.prototype.getBoundingClientRect

beforeEach(() => {
  jest.useFakeTimers()
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
  act(() => {
    jest.runOnlyPendingTimers()
  })
  jest.useRealTimers()
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect
})
const runTimers = () =>
  act(() => {
    jest.runOnlyPendingTimers()
  })

describe('useRipple', () => {
  test('animation values', () => {
    render(<RippleComponent />)
    expect(screen.getByTestId('rippleOffset')).toHaveTextContent('0, 0')
    expect(screen.getByTestId('rippleScaleRange')).toHaveTextContent('0.1-1')
    expect(screen.getByTestId('rippleSize')).toHaveTextContent('100%')
  })

  test('bounded animation values', () => {
    render(<RippleComponent bounded />)
    expect(screen.getByTestId('rippleOffset')).toHaveTextContent('165px, 0')
    expect(screen.getByTestId('rippleScaleRange')).toHaveTextContent(
      '1-12.041594578792294'
    )
    expect(screen.getByTestId('rippleSize')).toHaveTextContent('30px')
  })

  test('callbacks control className', () => {
    render(<RippleComponent />)
    expect(screen.getByTestId('className')).toHaveTextContent('')

    fireEvent.click(screen.getByTestId('startBG'))
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on')

    fireEvent.click(screen.getByTestId('startFG'))
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on fg-in')

    // foreground is locked for a minimum time to animate the ripple
    fireEvent.click(screen.getByTestId('endFG'))
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on fg-in')
    runTimers()
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on fg-out')
    runTimers()
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on')

    fireEvent.click(screen.getByTestId('endBG'))
    expect(screen.getByTestId('className')).toHaveTextContent('')
  })

  test('long press', () => {
    render(<RippleComponent />)
    expect(screen.getByTestId('className')).toHaveTextContent('')

    fireEvent.click(screen.getByTestId('startBG'))
    fireEvent.click(screen.getByTestId('startFG'))
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on fg-in')

    // foreground is locked for a minimum time to animate the ripple
    runTimers()
    fireEvent.click(screen.getByTestId('endFG'))
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on fg-out')
  })

  test('tab keyup', () => {
    // Key up triggers endFG but shouldn't ripple out unless ripple is already in
    // e.g. when tabbing onto a ripple element
    render(<RippleComponent />)
    fireEvent.click(screen.getByTestId('startBG'))
    fireEvent.click(screen.getByTestId('endFG'))
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on')
  })

  test('"double on" background behavior', () => {
    // The "double on" behavior tracks when the background has been activated by
    // both hover and focus and needs both hover out and blur to de-activate
    render(<RippleComponent />)
    expect(screen.getByTestId('className')).toHaveTextContent('')

    fireEvent.click(screen.getByTestId('startBG'))
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on')
    fireEvent.click(screen.getByTestId('startBG'))
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on')

    fireEvent.click(screen.getByTestId('endBG'))
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on')
    fireEvent.click(screen.getByTestId('endBG'))
    expect(screen.getByTestId('className')).toHaveTextContent('')
  })
})
