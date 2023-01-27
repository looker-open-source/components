/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { render, screen } from '@testing-library/react'
import { ConstitutionShort } from '../../fixtures/Constitution'
import { Basic, HeaderDetail, HeaderCloseButton } from './stories/index.stories'
import { DialogLayout } from './DialogLayout'

describe('DialogLayout', () => {
  test('Basic ', () => {
    render(<Basic />)
    expect(
      screen.getByText(/Lorem Ipsum is simply dummy text/)
    ).toBeInTheDocument()
  })

  test('Replaces the built-in `IconButton` with an arbitrary ReactNode', () => {
    renderWithTheme(<HeaderDetail />)
    expect(screen.getByText('Header text')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
  })

  test('HeaderCloseButton ', () => {
    renderWithTheme(<HeaderCloseButton />)
    expect(screen.getByText('Close')).toBeInTheDocument()
  })

  test('FooterSecondary ', () => {
    renderWithTheme(
      <DialogLayout footerSecondary="Cancel" footer="Footer text">
        <ConstitutionShort />
      </DialogLayout>
    )
    expect(screen.getByText('Footer text')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
  })

  test('FooterSecondary without footer causes TS Exception', () => {
    // @ts-expect-error footerSecondary must be paired with footer
    renderWithTheme(<DialogLayout footerSecondary="problem" />)
  })
})
