/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { FlexItem } from './FlexItem'

describe('FlexItem', () => {
  test('default', () => {
    renderWithTheme(<FlexItem data-testid="flex">💪</FlexItem>)
    expect(screen.getByTestId('flex')).toHaveStyle('display: block;')
  })

  test('alignSelf', () => {
    renderWithTheme(<FlexItem data-testid="flex" alignSelf="center" />)
    expect(screen.getByTestId('flex')).toHaveStyle('align-self: center;')
  })

  test('order', () => {
    renderWithTheme(<FlexItem data-testid="flex" order={1} />)
    expect(screen.getByTestId('flex')).toHaveStyle('order: 1;')
  })

  test('flex', () => {
    renderWithTheme(<FlexItem data-testid="flex" flex="1 50px" />)
    expect(screen.getByTestId('flex')).toHaveStyle('flex: 1 50px;')
  })

  test('basis', () => {
    renderWithTheme(<FlexItem data-testid="flex" flexBasis="100px" />)
    expect(screen.getByTestId('flex')).toHaveStyle('flex-basis: 100px;')
  })
})
