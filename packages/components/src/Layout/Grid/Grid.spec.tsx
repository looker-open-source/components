/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Grid } from './Grid'

const content = (
  <>
    <div>first</div>
    <div>second</div>
    <div>third</div>
    <div>fourth</div>
  </>
)

describe('Grid', () => {
  test('default', () => {
    renderWithTheme(<Grid data-testid="grid">{content} </Grid>)
    expect(screen.getByTestId('grid')).toHaveStyleRule('display', 'grid')
  })

  test('specified gap', () => {
    renderWithTheme(
      <Grid data-testid="grid" gap="u8">
        {content}
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveStyleRule('grid-gap', '2rem')
  })

  test('specified columns', () => {
    renderWithTheme(
      <Grid data-testid="grid" columns={4}>
        {content}
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveStyleRule(
      'grid-template-columns',
      'repeat(4,minmax(0,1fr))'
    )
  })

  test('specified width', () => {
    renderWithTheme(
      <Grid data-testid="grid" width="50%">
        {content}
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveStyleRule('width', '50%')
  })
})
