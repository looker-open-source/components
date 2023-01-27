/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { screen } from '@testing-library/react'
import styled from 'styled-components'
/**
 * This import path is ill-advised but acceptable since this
 * is a test-only import and prevents a package-dependency loop
 */
import { renderWithTheme } from '../../components-test-utils/src'
import { ThemeProvider } from './ThemeProvider'

const FauxParagraph = styled.p`
  color: ${({ theme }) => theme.colors.key};
`

describe('ThemeProvider', () => {
  test('builtIn default works', () => {
    const Test = () => {
      return (
        <ThemeProvider>
          <FauxParagraph>Standard</FauxParagraph>
        </ThemeProvider>
      )
    }

    renderWithTheme(<Test />)
    expect(screen.getByText('Standard')).toHaveStyle('color: rgb(108, 67, 224)')
  })
})
