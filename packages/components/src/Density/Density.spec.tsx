/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Basic, Positive1, Negative3 } from './stories/index.stories'

describe('Density', () => {
  test('default', () => {
    renderWithTheme(<Basic />)
    expect(screen.getByText('Cheddar')).toHaveStyle('font-size: 0.875rem')
  })

  test('+1', () => {
    renderWithTheme(<Positive1 />)
    expect(screen.getByText('Cheddar')).toHaveStyle('font-size: 1rem')
  })

  test('-3', () => {
    renderWithTheme(<Negative3 />)
    expect(screen.getByText('Cheddar')).toHaveStyle('font-size: 0.75rem')
  })
})
