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

import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import { renderWithTheme } from '@looker/components-test-utils'
import React from 'react'
import { fireEvent, screen, act } from '@testing-library/react'
import { ButtonOutline } from './ButtonOutline'

beforeEach(() => {
  jest.useFakeTimers()
})
afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})
const runTimers = () =>
  act(() => {
    jest.runOnlyPendingTimers()
  })

describe('ButtonOutline', () => {
  test('ripple effect default', () => {
    renderWithTheme(<ButtonOutline>Test</ButtonOutline>)

    const button = screen.getByRole('button')
    expect(button).not.toHaveClass('bg-on fg-in')
    expect(button).toHaveStyle({
      '--ripple-color': '#6C43E0',
      '--ripple-scale-end': '1',
      // This should change to 0.1 when brandAnimation default becomes true
      '--ripple-scale-start': '1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0',
    })

    fireEvent.focus(button)
    expect(button).toHaveClass('bg-on')

    fireEvent.mouseDown(button)
    expect(button).toHaveClass('bg-on fg-in')

    // foreground is locked for a minimum time to animate the ripple
    fireEvent.mouseUp(button)
    runTimers()
    expect(button).toHaveClass('bg-on fg-out')
    runTimers()
    expect(button).toHaveClass('bg-on')

    fireEvent.blur(button)
    expect(button).not.toHaveClass('bg-on fg-in')
  })

  test('Color critical', () => {
    renderWithTheme(<ButtonOutline color="critical">Test</ButtonOutline>)

    const button = screen.getByRole('button')
    expect(button).toHaveStyle({ '--ripple-color': '#CC1F36' })
  })
})
