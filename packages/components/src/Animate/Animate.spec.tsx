/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { FadeIn } from './Animate'

describe('FadeIn', () => {
  it('defaults', () => {
    renderWithTheme(<FadeIn data-testid="fadein" />)
    expect(screen.getByTestId('fadein')).toBeInTheDocument()
    expect(screen.getByTestId('fadein')).toHaveStyle(
      'animation-fill-mode: both;'
    )
  })
  it('delay and duration props', () => {
    renderWithTheme(
      <FadeIn data-testid="fadein" delay="intricate" duration="complex" />
    )
    expect(screen.getByTestId('fadein')).toHaveStyle('animation-delay: 500ms;')
    expect(screen.getByTestId('fadein')).toHaveStyle(
      'animation-duration: 400ms;'
    )
  })

  it('elements inside', () => {
    renderWithTheme(
      <FadeIn>
        <span>Some text</span>
      </FadeIn>
    )
    expect(screen.getByText('Some text')).toBeVisible()
  })
})
