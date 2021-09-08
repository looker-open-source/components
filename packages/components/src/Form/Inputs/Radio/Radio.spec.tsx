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
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { act, fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { RIPPLE_RATIO } from '../../../Ripple'
import * as stories from './Radio.story'

const { Basic, Disabled, DisabledChecked } = composeStories(stories)

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
describe('Radio', () => {
  test('renders properly', () => {
    renderWithTheme(<Basic />)
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  test('accepts defaultChecked prop', () => {
    renderWithTheme(<Basic defaultChecked />)
    expect(screen.getByRole('radio')).toBeChecked()
  })

  test('should accept disabled prop', () => {
    renderWithTheme(<Disabled />)
    expect(screen.getByRole('radio')).toBeDisabled()
  })

  test('should accept disabled and checked props together', () => {
    renderWithTheme(<DisabledChecked />)
    expect(screen.getByRole('radio')).toBeDisabled()
    expect(screen.getByRole('radio')).toBeChecked()
  })

  test('has aria-describedby attribute', () => {
    renderWithTheme(<Basic aria-describedby="some-id" id="RadioID" />)
    expect(screen.getByRole('radio')).toHaveAttribute(
      'aria-describedby',
      'some-id'
    )
  })

  test('renders with error', () => {
    renderWithTheme(<Basic validationType="error" />)
    expect(screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'true')
  })

  test('renders checked with error', () => {
    renderWithTheme(<Basic defaultChecked validationType="error" />)
    expect(screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'true')
  })

  test('should trigger onChange handler', () => {
    const onChange = jest.fn()
    renderWithTheme(<Basic id="radioID" onChange={onChange} />)
    fireEvent.click(screen.getByRole('radio'))
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('ripple effect', () => {
    renderWithTheme(<Basic />)

    const radio = screen.getByRole('radio').closest('div') as HTMLElement
    expect(radio).not.toHaveClass('bg-on fg-in')
    expect(radio).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'visible',
      '--ripple-scale-end': RIPPLE_RATIO.toString(),
      // This should change to 0.1 when brandAnimation default becomes true
      '--ripple-scale-start': RIPPLE_RATIO.toString(),
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0',
    })

    fireEvent.focus(radio)
    expect(radio).toHaveClass('bg-on')

    fireEvent.mouseDown(radio)
    expect(radio).toHaveClass('bg-on fg-in')

    // foreground is locked for a minimum time to animate the ripple
    fireEvent.mouseUp(radio)
    runTimers()
    expect(radio).toHaveClass('bg-on fg-out')
    runTimers()
    expect(radio).toHaveClass('bg-on')

    fireEvent.blur(radio)
    expect(radio).not.toHaveClass('bg-on fg-in')
  })
})
