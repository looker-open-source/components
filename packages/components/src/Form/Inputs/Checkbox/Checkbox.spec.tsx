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
import { renderWithTheme } from '@looker/components-test-utils'
import { act, fireEvent, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { RIPPLE_RATIO } from '../../../Ripple'
import type { CheckboxProps } from './Checkbox'
import * as stories from './stories/index.stories'

const { Basic, Checked, Disabled, DisabledChecked, MixedChecked, ReadOnly } =
  composeStories(stories)

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

describe('Checkbox', () => {
  test('renders', () => {
    renderWithTheme(<Basic />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  test('checked', () => {
    renderWithTheme(<Checked />)
    const checkboxInput = screen.getByRole('checkbox')
    expect(checkboxInput).toBeInTheDocument()
    expect(checkboxInput).toBeChecked()
  })

  test('mixed', () => {
    renderWithTheme(<MixedChecked />)
    const checkboxInput = screen.getByRole('checkbox')

    expect(checkboxInput).toBeInTheDocument()
    expect(checkboxInput).toBeChecked()
    expect(screen.getByText('Check Mark Mixed')).toBeInTheDocument()
  })

  test('disabled', () => {
    renderWithTheme(<Disabled />)
    const checkboxInput = screen.getByRole('checkbox')

    expect(checkboxInput).toBeDisabled()
  })

  test('disabled & checked', () => {
    renderWithTheme(<DisabledChecked />)
    const checkboxInput = screen.getByRole('checkbox')

    expect(checkboxInput).toBeChecked()
    expect(checkboxInput).toBeDisabled()
  })

  test('Accepts defaultChecked prop, and toggles value without change handler', () => {
    renderWithTheme(<Basic defaultChecked />)
    const checkboxInput = screen.getByRole('checkbox')
    expect(checkboxInput).toBeChecked()

    fireEvent.click(checkboxInput)

    // toggled state:
    expect(checkboxInput).not.toBeChecked()
  })

  test('Accepts checked prop, and is readOnly without a change handler', () => {
    renderWithTheme(<Checked />)
    const checkboxInput = screen.getByRole('checkbox')

    expect(checkboxInput).toBeChecked()

    fireEvent.click(checkboxInput)

    // unchanged state:
    expect(checkboxInput).toBeChecked()
  })

  test('Triggers onChange handler', () => {
    const mockProps: CheckboxProps = {
      onChange: jest.fn(),
    }

    renderWithTheme(<Basic {...mockProps} />)

    const checkboxInput = screen.getByRole('checkbox')

    expect(mockProps.onChange).not.toHaveBeenCalled()
    expect(checkboxInput).not.toBeChecked()

    fireEvent.click(checkboxInput)

    expect(mockProps.onChange).toHaveBeenCalledTimes(1)
    expect(checkboxInput).toBeChecked()
  })

  test("Checkbox readOnly doesn't register change events", () => {
    const mockProps: CheckboxProps = {
      onChange: jest.fn(),
    }

    renderWithTheme(<ReadOnly id="checkboxID" {...mockProps} />)

    const checkboxInput = screen.getByRole('checkbox')
    fireEvent.click(checkboxInput)
    expect(mockProps.onChange).toHaveBeenCalledTimes(0)
  })

  test('Supports aria-describedby', () => {
    renderWithTheme(<Basic aria-describedby="some-id" id="checkboxID" />)
    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'aria-describedby',
      'some-id'
    )
  })

  test('ripple effect', () => {
    renderWithTheme(<Basic />)

    const checkboxWrapper = screen
      .getByRole('checkbox')
      .closest('div') as HTMLElement
    const checkbox = screen.getByRole('checkbox')
    expect(checkboxWrapper).not.toHaveClass('bg-on fg-in')
    expect(checkboxWrapper).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-overflow': 'visible',
      '--ripple-scale-end': RIPPLE_RATIO.toString(),
      '--ripple-scale-start': '0.1',
      '--ripple-size': '100%',
      '--ripple-translate': '0, 0',
    })

    fireEvent.focus(checkbox)
    expect(checkboxWrapper).toHaveClass('bg-on')

    fireEvent.mouseDown(checkbox)
    expect(checkboxWrapper).toHaveClass('bg-on fg-in')

    // foreground is locked for a minimum time to animate the ripple
    fireEvent.mouseUp(checkbox)
    runTimers()
    expect(checkboxWrapper).toHaveClass('bg-on fg-out')
    runTimers()
    expect(checkboxWrapper).toHaveClass('bg-on')

    fireEvent.blur(checkbox)
    expect(checkboxWrapper).not.toHaveClass('bg-on fg-in')
  })
})
