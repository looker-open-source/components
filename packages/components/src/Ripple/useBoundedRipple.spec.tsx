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
import { screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import React from 'react'
import type { UseBoundedRippleProps } from './types'
import { useBoundedRipple } from './useBoundedRipple'

const RippleInner = (props: UseBoundedRippleProps) => {
  const {
    callbacks: { startBG, endBG, startFG, endFG },
    className,
    ref,
    style,
  } = useBoundedRipple(props)
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
const RippleComponent = (props: UseBoundedRippleProps) => (
  <ThemeProvider
    theme={theme => ({
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
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  Element.prototype.getBoundingClientRect = globalGetBoundingClientRect
})

describe('useRipple', () => {
  test('bounded animation values', () => {
    renderWithTheme(<RippleComponent />)
    expect(screen.getByText('style')).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'hidden',
      '--ripple-scale-end': '12.041594578792294',
      '--ripple-scale-start': '1',
      '--ripple-size': '30px',
      '--ripple-translate': '165px, 0',
    })
  })
})
