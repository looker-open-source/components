/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { OrderedList } from './OrderedList'

import 'jest-styled-components'

describe('OrderedList', () => {
  test('Should display child li elements', () => {
    renderWithTheme(
      <OrderedList>
        <li>Gouda</li>
        <li>Swiss</li>
        <li>Pepper Jack</li>
      </OrderedList>
    )

    screen.getByText('Gouda')
    screen.getByText('Swiss')
    screen.getByText('Pepper Jack')
  })

  test("Accepts 'number' type", () => {
    renderWithTheme(
      <OrderedList type="number">
        <li>Gouda</li>
        <li>Swiss</li>
        <li>Pepper Jack</li>
      </OrderedList>
    )

    screen.getByText('Gouda')
    screen.getByText('Swiss')
    screen.getByText('Pepper Jack')

    expect(screen.getByRole('list')).toHaveAttribute('type', 'number')
  })

  test("Accepts 'letter' type", () => {
    renderWithTheme(
      <OrderedList type="letter">
        <li>Gouda</li>
        <li>Swiss</li>
        <li>Pepper Jack</li>
      </OrderedList>
    )

    screen.getByText('Gouda')
    screen.getByText('Swiss')
    screen.getByText('Pepper Jack')

    expect(screen.getByRole('list')).toHaveAttribute('type', 'letter')
  })
})
