/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { Card } from './Card'

describe('Card', () => {
  test('default', () => {
    renderWithTheme(<Card>🥑</Card>)
    expect(screen.getByText('🥑')).toBeInTheDocument()
  })
  test('raised', () => {
    renderWithTheme(<Card raised>🥑</Card>)
    expect(screen.getByText('🥑')).toHaveStyle(
      'box-shadow: 0px 1px 2px 0px rgba(60,64,67,.30),0px 1px 3px 1px rgba(60,64,67,.15);'
    )
  })
})
