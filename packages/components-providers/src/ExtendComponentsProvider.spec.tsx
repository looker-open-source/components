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
import { ComponentsProvider } from './ComponentsProvider'
import { ExtendComponentsThemeProvider } from './ExtendComponentsProvider'

const FauxParagraph = styled.p`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.key};
`

describe('ExtendComponentsProvider', () => {
  test('Extends existing theme', () => {
    const Test = () => {
      return (
        <ComponentsProvider
          themeCustomizations={{
            colors: { background: 'black', key: 'purple' },
          }}
        >
          <FauxParagraph>Standard</FauxParagraph>

          <ExtendComponentsThemeProvider
            themeCustomizations={{
              colors: { key: 'red' },
            }}
          >
            <FauxParagraph>Extended</FauxParagraph>
          </ExtendComponentsThemeProvider>
        </ComponentsProvider>
      )
    }

    renderWithTheme(<Test />)

    expect(screen.getByText('Standard')).toHaveStyle('color: purple')
    expect(screen.getByText('Standard')).toHaveStyle('background: black')
    expect(screen.getByText('Extended')).toHaveStyle('color: red')
    expect(screen.getByText('Extended')).toHaveStyle('background: black')
  })
})
