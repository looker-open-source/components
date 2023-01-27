/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Basic, Secondary } from './stories/index.stories'

describe('DialogFooter', () => {
  test('basic ', () => {
    renderWithTheme(<Basic />)
    expect(screen.getByText('Footer Text')).toBeInTheDocument()
  })

  test('secondary', () => {
    renderWithTheme(<Secondary />)
    expect(screen.getByText('Done')).toBeInTheDocument()
    expect(screen.getByText('Footer Text')).toBeInTheDocument()
  })
})
