/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { useTheme } from 'styled-components'
import { render, screen } from '@testing-library/react'
import { VisWrapper } from './VisWrapper'

describe('VisWrapper', () => {
  it('wraps itself in ComponentsProvider if rendered outside of theme context', () => {
    const CustomVis = () => {
      const theme = useTheme()
      return (
        <>
          <p>Rendered Without Error!</p>
          <dl>
            <dt>Background Color:</dt>
            <dd>{theme.colors.background}</dd>
          </dl>
        </>
      )
    }

    render(
      <VisWrapper>
        <CustomVis />
      </VisWrapper>
    )

    expect(screen.getByText('Rendered Without Error!')).toBeInTheDocument()
  })
})
