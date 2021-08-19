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

import { renderWithTheme } from '@looker/components-test-utils'
import { act, fireEvent, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import React from 'react'
import { useRipple, UseRippleProps } from './useRipple'

const RippleInner = (props: UseRippleProps) => {
  const {
    callbacks: { startBG, endBG, startFG, endFG },
    className,
    ref,
    style,
  } = useRipple(props)
  return (
    <div ref={ref}>
      <div data-testid="startBG" onClick={startBG} />
      <div data-testid="endBG" onClick={endBG} />
      <div data-testid="startFG" onClick={startFG} />
      <div data-testid="endFG" onClick={endFG} />
      <div data-testid="className">{className}</div>
      <div style={style}>style</div>
    </div>
  )
}

// TODO: Remove this when we change brandAnimation default to true
// (then just change the value below to use this for the brandAnimation: false scenario)
const RippleComponent = (props: UseRippleProps) => (
  <ThemeProvider
    theme={(theme) => ({
      ...theme,
      defaults: { ...theme.defaults, brandAnimation: true },
    })}
  >
    <RippleInner {...props} />
  </ThemeProvider>
)

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
    renderWithTheme(<RippleComponent />)
    expect(screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0',
    })
  })

  test('bounded animation values', () => {
    renderWithTheme(<RippleComponent bounded />)
    expect(screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '12.041594578792294',
      '--ripple-scale-start': '1',
      '--ripple-size': '30px',
      '--ripple-translate': '165px, 0',
    })
  })

  test('color animation values', () => {
    renderWithTheme(<RippleComponent color="key" />)
    expect(screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#6C43E0',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0',
    })
  })

  test('theme setting brandAnimation false', () => {
    renderWithTheme(<RippleInner color="key" />)
    expect(screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#6C43E0',
      '--ripple-scale-end': '1',
      '--ripple-scale-start': '1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0',
    })
  })

  test('callbacks control className', () => {
    renderWithTheme(<RippleComponent />)
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
    renderWithTheme(<RippleComponent />)
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
    renderWithTheme(<RippleComponent />)
    fireEvent.click(screen.getByTestId('startBG'))
    fireEvent.click(screen.getByTestId('endFG'))
    expect(screen.getByTestId('className')).toHaveTextContent('bg-on')
  })

  test('"double on" background behavior', () => {
    // The "double on" behavior tracks when the background has been activated by
    // both hover and focus and needs both hover out and blur to de-activate
    renderWithTheme(<RippleComponent />)
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
