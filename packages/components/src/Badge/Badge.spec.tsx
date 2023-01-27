/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  test('Defaults', () => {
    renderWithTheme(<Badge>Good!</Badge>)
    const badge = screen.getByText('Good!')
    expect(badge).toHaveStyle('background: rgb(237, 232, 251)')
    expect(badge).toHaveStyle('line-height: 24px')
  })

  test('Small, Positive', () => {
    renderWithTheme(
      <Badge size="small" intent="positive">
        Good!
      </Badge>
    )
    const badge = screen.getByText('Good!')
    expect(badge).toHaveStyle('background: rgb(228, 245, 235)')
    expect(badge).toHaveStyle('line-height: 16px')
  })
})
