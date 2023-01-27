/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import 'jest-styled-components'
import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { DividerVertical } from './DividerVertical'

test('render Default DividerVertical', () => {
  renderWithTheme(<DividerVertical />)
  const divider = screen.getByRole('separator')
  expect(divider).toBeInTheDocument()
  expect(divider).toHaveAttribute('aria-orientation', 'vertical')
})

// CSS libraries like bootstrap may override hr { height }, causing our divider
// to not be visible. In order to be defensive against this, we set this to
// inherit.
test('overrides global height declarations when stretching', () => {
  renderWithTheme(<DividerVertical stretch />)
  expect(screen.getByRole('separator')).toHaveStyle({ height: 'inherit' })
})
