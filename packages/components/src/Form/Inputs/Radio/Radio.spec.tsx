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
import { composeStories } from '@storybook/testing-react'
import { RIPPLE_RATIO } from '../../../Ripple'
import * as stories from './stories/index.stories'

const { Basic, Disabled } = composeStories(stories)

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
    expect(screen.getAllByRole('radio')[0]).toBeDisabled()
  })

  test('should accept disabled and checked props together', () => {
    renderWithTheme(<Disabled />)
    expect(screen.getAllByRole('radio')[1]).toBeDisabled()
    expect(screen.getAllByRole('radio')[1]).toBeChecked()
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

    const radioWrapper = screen.getByRole('radio').closest('div') as HTMLElement
    const radio = screen.getByRole('radio')
    expect(radioWrapper).not.toHaveClass('bg-on fg-in')
    expect(radioWrapper).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'visible',
      '--ripple-scale-end': RIPPLE_RATIO.toString(),
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0',
    })

    fireEvent.focus(radio)
    expect(radioWrapper).toHaveClass('bg-on')

    fireEvent.mouseDown(radio)
    expect(radioWrapper).toHaveClass('bg-on fg-in')

    // foreground is locked for a minimum time to animate the ripple
    fireEvent.mouseUp(radio)
    runTimers()
    expect(radioWrapper).toHaveClass('bg-on fg-out')
    runTimers()
    expect(radioWrapper).toHaveClass('bg-on')

    fireEvent.blur(radio)
    expect(radioWrapper).not.toHaveClass('bg-on fg-in')
  })
})
