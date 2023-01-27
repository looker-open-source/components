/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import Basic from './stories/Basic'
import { PopoverContent } from './PopoverContent'

describe('PopoverContent', () => {
  test('Basic', () => {
    renderWithTheme(<Basic />)
    const content = screen.getByText(/We the People of the United States,/)
    expect(content).toBeInTheDocument()
  })

  test('Custom padding', () => {
    renderWithTheme(
      <PopoverContent pb="u3" pt="u8" px="u3">
        Hello world
      </PopoverContent>
    )
    const item = screen.getByText('Hello world')
    expect(item).toHaveStyleRule('padding-left', '0.75rem')
    expect(item).toHaveStyleRule('padding-right', '0.75rem')
    expect(item).toHaveStyleRule('padding-top', '2rem')
    expect(item).toHaveStyleRule('padding-bottom', '0.75rem')
  })

  test('Custom padding `p`', () => {
    renderWithTheme(<PopoverContent p="u12">Hello world</PopoverContent>)
    const item = screen.getByText('Hello world')
    expect(item).toHaveStyleRule('padding-left', '3rem')
    expect(item).toHaveStyleRule('padding-right', '3rem')
    expect(item).toHaveStyleRule('padding-top', '3rem')
    expect(item).toHaveStyleRule('padding-bottom', '3rem')
  })
})
