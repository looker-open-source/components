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

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { act, fireEvent, screen } from '@testing-library/react'
import { RIPPLE_RATIO } from '../../../Ripple'
import { Basic, Checked, Disabled } from './stories/index.stories'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.resetAllMocks()
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

const runTimers = () =>
  act(() => {
    jest.runOnlyPendingTimers()
  })

describe('ToggleSwitch', () => {
  test('default', () => {
    renderWithTheme(<Basic />)
    expect(screen.getByRole('switch')).not.toBeChecked()
  })

  test('on', () => {
    renderWithTheme(<Checked />)
    expect(screen.getByRole('switch')).toBeChecked()
  })

  test('disabled', () => {
    renderWithTheme(<Disabled />)
    expect(screen.getByRole('switch')).toBeDisabled()
  })

  test('disabled', () => {
    renderWithTheme(<Disabled />)
    expect(screen.getByRole('switch')).toBeDisabled()
  })

  test('Should trigger onChange handler', () => {
    const onChange = jest.fn()
    renderWithTheme(<Basic onChange={onChange} />)
    fireEvent.click(screen.getByRole('switch'))
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('ripple effect', () => {
    renderWithTheme(<Basic />)

    const input = screen.getByRole('switch')
    const handle = screen.getByTestId('handle') as HTMLElement
    expect(handle).not.toHaveClass('bg-on fg-in')
    expect(handle).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'visible',
      '--ripple-scale-end': RIPPLE_RATIO.toString(),
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0',
    })

    fireEvent.focus(input)
    expect(handle).toHaveClass('bg-on')

    fireEvent.mouseDown(input)
    expect(handle).toHaveClass('bg-on fg-in')

    // foreground is locked for a minimum time to animate the ripple
    fireEvent.mouseUp(input)
    runTimers()
    expect(handle).toHaveClass('bg-on fg-out')
    runTimers()
    expect(handle).toHaveClass('bg-on')

    fireEvent.blur(input)
    expect(handle).not.toHaveClass('bg-on fg-in')
  })
})
