/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { theme } from '@looker/design-tokens'
import { Add, Delete } from '@styled-icons/material'
import { screen } from '@testing-library/react'
import { Icon } from './Icon'

describe('Icon', () => {
  test('Default', () => {
    renderWithTheme(<Icon icon={<Add />} />)
  })

  test('Styled system size', () => {
    renderWithTheme(
      <Icon data-testid="icon-wrapper" icon={<Add />} size="large" />
    )

    expect(screen.getByTestId('icon-wrapper')).toHaveStyle(
      `height: ${theme.sizes.large}`
    )
    expect(screen.getByTestId('icon-wrapper')).toHaveStyle(
      `width: ${theme.sizes.large}`
    )
  })

  test('Explicit size - integer as pixels', () => {
    renderWithTheme(
      <Icon data-testid="icon-wrapper" icon={<Add />} size={12} />
    )
    expect(screen.getByTestId('icon-wrapper')).toHaveStyle('width: 12px')
  })

  test('Explicit size - string', () => {
    renderWithTheme(
      <Icon data-testid="icon-wrapper" icon={<Add />} size="1rem" />
    )
    expect(screen.getByTestId('icon-wrapper')).toHaveStyle('width: 1rem')
  })

  test('DOM attribute support', () => {
    renderWithTheme(<Icon icon={<Add />} aria-label="Add" />)
    expect(screen.getByLabelText('Add')).toBeInTheDocument()
  })

  test(`No title by default`, () => {
    renderWithTheme(<Icon icon={<Delete />} />)
    expect(screen.queryByLabelText("Oscar's House")).not.toBeInTheDocument()
  })

  test(`Title is assigned properly to SVG art`, () => {
    renderWithTheme(<Icon icon={<Delete />} title="Oscar's House" />)
    expect(screen.getByTitle("Oscar's House")).toBeInTheDocument()
  })
})
