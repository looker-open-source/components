/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import Basic from './stories/Basic'
import FooterClose from './stories/FooterClose'
import FooterWithChildren from './stories/FooterWithChildren'

describe('PopoverFooter', () => {
  test('basic ', () => {
    renderWithTheme(<Basic />)
    expect(screen.getByText('Done')).toBeInTheDocument()
  })

  test('with using prop close ', () => {
    renderWithTheme(<FooterClose />)
    expect(screen.getByText('Close')).toBeInTheDocument()
  })

  test('with children', () => {
    renderWithTheme(<FooterWithChildren />)
    expect(screen.getByText('Done')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
  })
})
