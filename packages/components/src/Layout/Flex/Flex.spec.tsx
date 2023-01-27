/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Flex } from './Flex'

describe('Flex', () => {
  test('default ', () => {
    renderWithTheme(
      <Flex data-testid="flex">
        <div>🥑</div>
        <div>🐛</div>
      </Flex>
    )
    expect(screen.getByTestId('flex')).toHaveStyle('display: flex')
  })

  test('justifyContent', () => {
    renderWithTheme(<Flex data-testid="flex" justifyContent="center" />)
    expect(screen.getByTestId('flex')).toHaveStyle('justify-content: center')
  })

  test('alignItems', () => {
    renderWithTheme(<Flex data-testid="flex" alignItems="center" />)
    expect(screen.getByTestId('flex')).toHaveStyle('align-items: center')
  })

  test('alignContent', () => {
    renderWithTheme(<Flex data-testid="flex" alignContent="start" />)
    expect(screen.getByTestId('flex')).toHaveStyle('align-content: start')
  })

  test('flexDirection', () => {
    renderWithTheme(<Flex data-testid="flex" flexDirection="row-reverse" />)
    expect(screen.getByTestId('flex')).toHaveStyle(
      'flex-direction: row-reverse'
    )
  })

  test('flexWrap', () => {
    renderWithTheme(<Flex data-testid="flex" flexWrap="nowrap" />)
    expect(screen.getByTestId('flex')).toHaveStyle('flex-wrap: nowrap')
  })
})
