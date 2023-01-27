/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Code } from './Code'

describe('Code', () => {
  test('default', () => {
    renderWithTheme(<Code>Hello</Code>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('Hello').tagName).toEqual('CODE')
  })

  test('fontSize', () => {
    renderWithTheme(<Code fontSize="xxxxlarge">Hello</Code>)
    expect(screen.getByText('Hello')).toHaveStyle('font-size: 2.25rem;')
  })

  test('textAlign', () => {
    renderWithTheme(<Code textAlign="right">Hello</Code>)
    expect(screen.getByText('Hello')).toHaveStyle('text-align: right')
  })

  test('fontWeight', () => {
    renderWithTheme(<Code fontWeight="bold">Hello</Code>)
    expect(screen.getByText('Hello')).toHaveStyle('font-weight: 700;')
  })
})
