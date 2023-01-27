/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { render, screen } from '@testing-library/react'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
/**
 * This import path is ill-advised but acceptable since this
 * is a test-only import and prevents a package-dependency loop
 */
import { renderWithTheme } from '../../../../components-test-utils/src'
import { theme } from '../../theme'
import { generateIntentShade } from './generateIntentShade'

describe('generateIntentShade', () => {
  test('default', () => {
    const Test = styled.p`
      background: ${generateIntentShade('blue')};
      color: ${generateIntentShade('lightblue')};
    `

    renderWithTheme(<Test>Find me</Test>)

    const test = screen.getByText('Find me')
    expect(test).toHaveStyle('background: #0000bf')
    expect(test).toHaveStyle('color: #348fac')
  })

  test('light background', () => {
    const Test = styled.p`
      background: ${generateIntentShade('blue')};
      color: ${generateIntentShade('lightblue')};
    `

    const customTheme = theme
    theme.colors.background = 'black'

    render(
      <ThemeProvider theme={customTheme}>
        <Test>Find me</Test>
      </ThemeProvider>
    )

    const test = screen.getByText('Find me')
    expect(test).toHaveStyle('background: rgb(64, 64, 255);')
    expect(test).toHaveStyle('color: rgb(255, 255, 255);')
  })
})
