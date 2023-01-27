/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { DialogContent } from './DialogContent'

describe('DialogContent', () => {
  test('basic', () => {
    renderWithTheme(<DialogContent>Dialog Content</DialogContent>)
    expect(screen.getByText('Dialog Content')).toHaveStyleRule(
      'padding-bottom',
      '1.25rem'
    )
  })
  test('display correct padding if hasFooter', () => {
    renderWithTheme(<DialogContent hasFooter>Stuff</DialogContent>)

    expect(screen.getByText('Stuff')).toHaveStyleRule(
      'padding-bottom',
      '0.125rem'
    )
  })

  test('display correct padding if hasHeader', () => {
    renderWithTheme(<DialogContent hasHeader>Stuff</DialogContent>)

    expect(screen.getByText('Stuff')).toHaveStyleRule('padding-top', '0.125rem')
  })

  test('display correct padding if both  hasFooter & hasHeader', () => {
    renderWithTheme(
      <DialogContent hasFooter hasHeader>
        Stuff
      </DialogContent>
    )

    expect(screen.getByText('Stuff')).toHaveStyleRule(
      'padding-bottom',
      '0.125rem'
    )
    expect(screen.getByText('Stuff')).toHaveStyleRule('padding-top', '0.125rem')
  })

  test('Custom padding `p`', () => {
    renderWithTheme(<DialogContent p="u12">Hello world</DialogContent>)
    const item = screen.getByText('Hello world')
    expect(item).toHaveStyleRule('padding-left', '3rem')
    expect(item).toHaveStyleRule('padding-right', '3rem')
    expect(item).toHaveStyleRule('padding-top', '3rem')
    expect(item).toHaveStyleRule('padding-bottom', '3rem')
  })
})
