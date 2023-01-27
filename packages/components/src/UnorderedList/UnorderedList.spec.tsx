/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { UnorderedList } from './UnorderedList'

import 'jest-styled-components'

describe('UnorderedList', () => {
  test('Should display child li elements', () => {
    renderWithTheme(
      <UnorderedList>
        <li>Gouda</li>
        <li>Swiss</li>
        <li>Pepper Jack</li>
      </UnorderedList>
    )

    screen.getByText('Gouda')
    screen.getByText('Swiss')
    screen.getByText('Pepper Jack')
  })

  test("Accepts 'bullet' type", () => {
    renderWithTheme(
      <UnorderedList type="bullet">
        <li>Gouda</li>
        <li>Swiss</li>
        <li>Pepper Jack</li>
      </UnorderedList>
    )

    screen.getByText('Gouda')
    screen.getByText('Swiss')
    screen.getByText('Pepper Jack')

    expect(screen.getByRole('list')).toHaveAttribute('type', 'bullet')
  })
})
