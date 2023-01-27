/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Paragraph } from './Paragraph'

describe('Paragraph', () => {
  test('default', () => {
    renderWithTheme(<Paragraph>Hello</Paragraph>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('Hello').tagName).toEqual('P')
  })

  test('fontSize = default', () => {
    renderWithTheme(<Paragraph>Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('font-size: inherit;')
  })

  test('fontSize = design token', () => {
    renderWithTheme(<Paragraph fontSize="xxxxlarge">Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('font-size: 2.25rem;')
  })

  test('textAlign', () => {
    renderWithTheme(<Paragraph textAlign="right">Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('text-align: right')
  })

  test('fontWeight', () => {
    renderWithTheme(<Paragraph fontWeight="bold">Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('font-weight: 700;')
  })

  test('color', () => {
    renderWithTheme(<Paragraph color="critical">Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('color:  rgb(204, 31, 54)')
  })

  test('textTransform', () => {
    renderWithTheme(<Paragraph textTransform="uppercase">Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('text-transform: uppercase;')
  })

  test('breakword', () => {
    renderWithTheme(<Paragraph breakword>Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('overflow-wrap: break-word;')
  })

  test('textDecoration', () => {
    renderWithTheme(<Paragraph textDecoration="line-through">Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle(
      'text-decoration: line-through;'
    )
  })

  test('truncate', () => {
    renderWithTheme(<Paragraph truncate>Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('text-overflow: ellipsis;')
  })

  test('multiline truncate', () => {
    renderWithTheme(<Paragraph truncateLines={2}>Hello</Paragraph>)
    expect(screen.getByText('Hello')).toHaveStyle('display: -webkit-box;')
  })
})
