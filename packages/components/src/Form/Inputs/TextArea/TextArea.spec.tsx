/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { TextArea } from './TextArea'

describe('TextArea', () => {
  test('with placeholder', () => {
    renderWithTheme(<TextArea placeholder="this is a placeholder" />)
    expect(
      screen.getByPlaceholderText('this is a placeholder')
    ).toBeInTheDocument()
  })

  test('should accept disabled', () => {
    renderWithTheme(<TextArea disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  test('with an error validation', () => {
    renderWithTheme(<TextArea validationType="error" />)
    expect(screen.getByRole('textbox')).toBeInvalid()
  })

  test('TextArea resizes with prop resize = true', () => {
    renderWithTheme(<TextArea resize />)
    expect(screen.getByRole('textbox')).toHaveStyle('resize: vertical')
  })

  test('TextArea resizes with prop resize = false', () => {
    renderWithTheme(<TextArea resize={false} />)
    expect(screen.getByRole('textbox')).toHaveStyle('resize: none')
  })

  test('TextArea resizes with prop resize = none', () => {
    renderWithTheme(<TextArea resize="none" />)
    expect(screen.getByRole('textbox')).toHaveStyle('resize: none')
  })

  test('TextArea resizes with prop resize = vertical', () => {
    renderWithTheme(<TextArea resize="vertical" />)
    expect(screen.getByRole('textbox')).toHaveStyle('resize: vertical')
  })
})
