/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { ValidationMessage } from './ValidationMessage'

test('An error message', () => {
  renderWithTheme(<ValidationMessage type="error" message="Error!" />)
  expect(screen.getByText('Error!')).toBeInTheDocument()
})
