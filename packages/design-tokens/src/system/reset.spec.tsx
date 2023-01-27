/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { screen } from '@testing-library/react'
import React from 'react'
import styled, { ThemeProvider, useTheme } from 'styled-components'
/**
 * This import path is ill-advised but acceptable since this
 * is a test-only import and prevents a package-dependency loop
 */
import { renderWithTheme } from '../../../components-test-utils/src'
import { reset } from './reset'

describe('reset', () => {
  test('resetFn', () => {
    const TestWrapper = ({ children }: React.PropsWithChildren<unknown>) => {
      const theme = useTheme()
      return <ThemeProvider theme={{ ...theme }}>{children}</ThemeProvider>
    }

    const Test = styled.p`
      ${reset}
    `

    renderWithTheme(
      <TestWrapper>
        <Test>Find me</Test>
      </TestWrapper>
    )

    const test = screen.getByText('Find me')
    expect(test).toHaveStyle('font-family: inherit;')
  })
})
