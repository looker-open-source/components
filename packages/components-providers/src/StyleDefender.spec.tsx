/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { StyleDefender } from './StyleDefender'
import { ThemeProvider } from './ThemeProvider'

describe('StyleDefender', () => {
  test('Direct styles', () => {
    render(
      <ThemeProvider>
        <StyleDefender>Find me</StyleDefender>
      </ThemeProvider>
    )

    const test = screen.getByText('Find me')
    expect(test).toHaveStyle(
      "font-family: Roboto,'Noto Sans','Noto Sans JP','Noto Sans CJK KR','Noto Sans Arabic UI','Noto Sans Devanagari UI','Noto Sans Hebrew','Noto Sans Thai UI',Helvetica,Arial,sans-serif"
    )
  })

  test('Computed', () => {
    render(
      <ThemeProvider>
        <StyleDefender>
          <p>Find me</p>
        </StyleDefender>
      </ThemeProvider>
    )

    const computedStyle = getComputedStyle(screen.getByText('Find me'))
    expect(computedStyle.boxSizing).toEqual('border-box')
  })

  test('Computed negative', () => {
    render(
      <ThemeProvider>
        <p>Find me</p>
      </ThemeProvider>
    )

    const computedStyle = getComputedStyle(screen.getByText('Find me'))
    expect(computedStyle.boxSizing).not.toEqual('border-box')
  })
})
