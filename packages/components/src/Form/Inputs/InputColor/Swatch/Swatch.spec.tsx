/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Swatch } from './Swatch'

describe('Swatch', () => {
  test('default', () => {
    renderWithTheme(<Swatch />)
    expect(screen.getByTestId('swatch')).toBeInTheDocument()
  })

  test('hex value', () => {
    renderWithTheme(<Swatch color="#4c6670" />)
    expect(screen.getByTestId('swatch')).toHaveStyle(
      'background-color: #4c6670'
    )
  })

  test('width and height', () => {
    renderWithTheme(<Swatch color="blue" size="large" />)
    const swatch = screen.getByTestId('swatch')
    expect(swatch).toHaveStyle('height: 2rem')
    expect(swatch).toHaveStyle('width: 2rem')
  })

  test('disabled state', () => {
    renderWithTheme(<Swatch color="blue" disabled />)
    // eslint-disable-next-line jest-dom/prefer-enabled-disabled
    expect(screen.getByTestId('swatch')).toHaveAttribute('disabled')
  })
})
