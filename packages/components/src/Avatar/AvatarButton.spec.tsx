/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { renderWithTheme } from '@looker/components-test-utils'
import { act, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { AvatarButton } from './AvatarButton'

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

describe('AvatarButton', () => {
  test('default', () => {
    renderWithTheme(<AvatarButton label="Avatar" />)

    const button = screen.getByRole('button')
    expect(button).not.toHaveClass('bg-on fg-in')
    expect(button).toHaveStyle({
      '--ripple-color': '#71767a',
      '--ripple-scale-end': '1',
      // This should change to 0.1 when brandAnimation default becomes true
      '--ripple-scale-start': '0.1',
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
})
