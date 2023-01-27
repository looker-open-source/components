/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CompatibleHTMLProps } from '@looker/design-tokens'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { useFocusVisible } from './useFocusVisible'

const FocusVisibleComponent = ({
  onBlur,
  onKeyUp,
  ...props
}: CompatibleHTMLProps<HTMLButtonElement>) => {
  const { focusVisible, ...handlers } = useFocusVisible({ onBlur, onKeyUp })
  return (
    <button {...props} {...handlers} type="button">
      {focusVisible.toString()}
    </button>
  )
}

describe('useFocusVisible', () => {
  test('false when clicking', () => {
    render(<FocusVisibleComponent />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(button).toHaveFocus()
    expect(button).toHaveTextContent('false')
  })

  test('true when tabbing', () => {
    render(<FocusVisibleComponent />)
    const button = screen.getByRole('button')
    userEvent.tab()
    expect(button).toHaveFocus()
    expect(button).toHaveTextContent('true')
  })

  test('removed on blur', () => {
    render(<FocusVisibleComponent />)
    const button = screen.getByRole('button')
    userEvent.tab()
    expect(button).toHaveTextContent('true')
    userEvent.tab()
    expect(button).toHaveTextContent('false')
  })
})
