/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { TreeBranch } from '.'

test('Renders children', () => {
  renderWithTheme(<TreeBranch>My Children</TreeBranch>)

  screen.getByText('My Children')
})
