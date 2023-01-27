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

const FauxParagraph = styled.p`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.key};
  font-family: ${({ theme }) => theme.fonts.body};
`

describe('ComponentsProvider', () => {
  test('Nesting ignores parent values (not a desireable choice)', () => {
    const Test = () => {
      return (
        <ComponentsProvider
          themeCustomizations={{
            colors: { background: 'black' },
          }}
        >
          <FauxParagraph>1 layer</FauxParagraph>
          <ComponentsProvider
            themeCustomizations={{
              colors: { key: 'purple' },
            }}
          >
            <FauxParagraph>2 layer</FauxParagraph>
          </ComponentsProvider>
        </ComponentsProvider>
      )
    }

    renderWithTheme(<Test />)

    expect(screen.getByText('1 layer')).toHaveStyle('color:rgb(108, 67, 224)')
    expect(screen.getByText('1 layer')).toHaveStyle('background: black')
    expect(screen.getByText('2 layer')).toHaveStyle('color: purple')
    expect(screen.getByText('2 layer')).toHaveStyle(
      'background:rgb(255, 255, 255);'
    )
  })

  test('loadGoogleFonts', () => {
    const Test = () => {
      return (
        <ComponentsProvider loadGoogleFonts>
          <FauxParagraph>Some Text</FauxParagraph>
        </ComponentsProvider>
      )
    }

    renderWithTheme(<Test />)

    expect(screen.getByText('Some Text')).toHaveStyle(
      "font-family: Roboto,'Noto Sans','Noto Sans JP','Noto Sans CJK KR','Noto Sans Arabic UI','Noto Sans Devanagari UI','Noto Sans Hebrew','Noto Sans Thai UI',Helvetica,Arial,sans-serif;"
    )
  })
})
