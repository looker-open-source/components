/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { renderWithTheme } from '@looker/components-test-utils'
import React from 'react'
import { screen } from '@testing-library/react'
import { ChipButton } from './ChipButton'

test('ChipButton', () => {
  renderWithTheme(<ChipButton>chip</ChipButton>)
  expect(screen.getByText('chip')).toBeInTheDocument()
})
