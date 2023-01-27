/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import 'jest-styled-components'
import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { Divider } from './Divider'

describe('Divider', () => {
  test('Default', () => {
    renderWithTheme(<Divider />)
    const divider = screen.getByRole('separator')
    expect(divider).toBeInTheDocument()
    expect(divider).toHaveAttribute('aria-orientation', 'horizontal')
  })

  test('appearance', () => {
    renderWithTheme(<Divider appearance="onDark" />)
    expect(screen.getByRole('separator')).toHaveStyle(
      'background-color: rgb(112, 119, 129)'
    )
  })

  test('custom', () => {
    renderWithTheme(<Divider size="20px" customColor="turquoise" />)
    expect(screen.getByRole('separator')).toHaveStyle('height: 20px')
    expect(screen.getByRole('separator')).toHaveStyle(
      'background-color: turquoise'
    )
  })
})
