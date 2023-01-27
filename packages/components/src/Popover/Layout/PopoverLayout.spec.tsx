/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import Basic from './stories/Basic'
import HeaderHideHeading from './stories/HeaderHideHeading'
import Header from './stories/Header'
import Full from './stories/Full'
import FooterCloseButton from './stories/FooterCloseButton'

describe('PopoverLayout', () => {
  test('basic display has footer ', () => {
    renderWithTheme(<Basic />)
    expect(
      screen.getByText(/We the People of the United States/)
    ).toBeInTheDocument()
    expect(screen.getByText('Done')).toBeInTheDocument()
  })

  test('hideHeading prop hides Header', () => {
    renderWithTheme(<HeaderHideHeading />)
    const hiddenHeader = screen.getByText('Header text')
    expect(hiddenHeader).toBeInTheDocument()
    expect(hiddenHeader).toHaveStyle('clip: rect(1px, 1px, 1px, 1px)')
  })

  test('Header and no Footer ', () => {
    renderWithTheme(<Header />)
    expect(screen.getByText('Close')).toBeInTheDocument()
    expect(screen.queryByText('Done')).not.toBeInTheDocument()
  })

  test('Footer with CloseButton', () => {
    renderWithTheme(<FooterCloseButton />)
    expect(screen.getByText('Close')).toBeInTheDocument()
    expect(screen.queryByText('Done')).not.toBeInTheDocument()
  })

  test('With header & footer display only "Done" button', () => {
    renderWithTheme(<Full />)
    expect(screen.queryByText('Close')).not.toBeInTheDocument()
    expect(screen.getByText('Done')).toBeInTheDocument()
  })

  test('FooterExtraValue ', () => {
    renderWithTheme(<Full />)
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Done')).toBeInTheDocument()
  })
})
