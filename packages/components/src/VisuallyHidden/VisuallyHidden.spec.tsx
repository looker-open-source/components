/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { VisuallyHidden } from './VisuallyHidden'

test('VisuallyHiddenText default', () => {
  renderWithTheme(<VisuallyHidden>I am hidden</VisuallyHidden>)
  expect(screen.getByText('I am hidden')).toBeInTheDocument()
  expect(screen.getByText('I am hidden')).toHaveStyle(
    'clip: rect(1px, 1px, 1px, 1px); left: 0; top: 0;'
  )
})
