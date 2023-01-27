/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { CardContent } from './CardContent'

describe('CardContent', () => {
  test('default', () => {
    renderWithTheme(<CardContent>🥑</CardContent>)
    expect(screen.getByText('🥑')).toBeInTheDocument()
  })

  test('custom padding', () => {
    renderWithTheme(<CardContent p="u8">🥑</CardContent>)
    expect(screen.getByText('🥑')).toHaveStyle('padding: 2rem')
  })
})
