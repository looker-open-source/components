/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Heading } from './Heading'

describe('Heading', () => {
  test('default', () => {
    renderWithTheme(<Heading>🥑</Heading>)
    expect(screen.getByText('🥑')).toBeInTheDocument()
    expect(screen.getByText('🥑').tagName).toEqual('H2')
  })

  test('<h1>', () => {
    renderWithTheme(<Heading as="h1">🥑</Heading>)
    expect(screen.getByText('🥑').tagName).toEqual('H1')
    expect(screen.getByText('🥑')).toHaveStyle('font-size: 1.5rem;')
  })

  test('<h1> sized to <h2>', () => {
    renderWithTheme(
      <Heading as="h1" fontSize="xlarge">
        🥑
      </Heading>
    )
    expect(screen.getByText('🥑').tagName).toEqual('H1')
    expect(screen.getByText('🥑')).toHaveStyle('font-size: 1.375rem;')
  })

  test('bold', () => {
    renderWithTheme(<Heading fontWeight="bold">🥑</Heading>)
    expect(screen.getByText('🥑')).toHaveStyle('font-weight: 700')
  })

  test('transform', () => {
    renderWithTheme(<Heading textTransform="capitalize">🥑</Heading>)
    expect(screen.getByText('🥑')).toHaveStyle('text-transform: capitalize')
  })

  test('variant color', () => {
    renderWithTheme(<Heading color="text1">🥑</Heading>)
    expect(screen.getByText('🥑')).toHaveStyle('color: rgb(147, 155, 165)')
  })

  test('truncated', () => {
    renderWithTheme(<Heading truncate>🥑</Heading>)
    expect(screen.getByText('🥑')).toHaveStyle('text-overflow: ellipsis;')
  })

  test('multiline truncate', () => {
    renderWithTheme(<Heading truncateLines={2}>🥑</Heading>)
    expect(screen.getByText('🥑')).toHaveStyle('display: -webkit-box;')
  })
})
