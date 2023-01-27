/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { FieldSlider } from './FieldSlider'

test('FieldSlider should accept detail and description attributes', () => {
  renderWithTheme(
    <FieldSlider
      detail="5/50"
      description="this is the description"
      label="Label"
      name="FieldSlider"
      id="field-slider"
    />
  )

  expect(screen.getByText('5/50')).toBeInTheDocument()
  expect(screen.getByLabelText('Label')).toHaveAccessibleDescription(
    'this is the description'
  )
})

test('FieldSlider should accept a disabled prop', () => {
  renderWithTheme(
    <FieldSlider disabled id="test" label="Test Label" name="test" />
  )

  const input = screen.getByLabelText('Test Label')
  expect(input).toBeDisabled()
})

test('FieldSlider should accept required attributes', () => {
  renderWithTheme(
    <FieldSlider label="Label" name="fieldSlider" id="field-slider" required />
  )
  expect(screen.getByText('required')).toBeVisible()
})
