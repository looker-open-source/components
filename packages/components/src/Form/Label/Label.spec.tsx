/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Label } from './Label'

describe('Label', () => {
  test('Basic', () => {
    renderWithTheme(<Label>Some text</Label>)
    expect(screen.getByText('Some text')).toBeInTheDocument()
  })

  test('Supports typography', () => {
    renderWithTheme(<Label fontWeight="normal">Some text</Label>)
    expect(screen.getByText('Some text')).toHaveStyleRule('font-weight', '400')
  })

  test('Associates with input', () => {
    renderWithTheme(
      <>
        <Label htmlFor="test">Some text</Label>
        <input id="test" />
      </>
    )
    expect(screen.getByLabelText('Some text')).toBeInTheDocument()
  })
})
