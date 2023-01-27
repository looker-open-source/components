/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { FieldRangeSlider } from './FieldRangeSlider'

describe('FieldRangeSlider', () => {
  test('should accept detail and description attributes', () => {
    renderWithTheme(
      <FieldRangeSlider
        detail="5/50"
        description="this is the description"
        label="👍"
        id="thumbs-up"
      />
    )

    expect(screen.getByText('5/50')).toBeInTheDocument()
    expect(screen.getByLabelText('👍')).toHaveAccessibleDescription(
      'this is the description'
    )
  })

  test('should accept a disabled prop', () => {
    renderWithTheme(<FieldRangeSlider disabled id="test" label="Test Label" />)
    expect(screen.getAllByRole('slider')[0]).toHaveAttribute(
      'aria-disabled',
      'true'
    )
  })

  test('should accept required attributes', () => {
    renderWithTheme(<FieldRangeSlider label="👍" id="thumbs-up" required />)
    expect(screen.getByText('required')).toBeVisible()
  })
})
