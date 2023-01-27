/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import {
  fireEvent,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { Box2 } from '../Layout/Box2'
import { isOverflowing } from '../utils'
import { Truncate } from './Truncate'

/**
 * JSDom doesn't replicate browser enough to trigger a measurable overflow
 * event.
 *
 * Mocking isOverflowing for now till we to figure out a clever way to
 * trigger overflow so test can prove the tooltip is enabled in overflow scenario
 */
jest.mock('../utils/isOverflowing', () => ({
  isOverflowing: jest.fn(),
}))

const longLabel = 'This is a long label that should trigger truncation'

describe('Truncate', () => {
  test('Basic', async () => {
    // False means text is not overflowing
    ;(isOverflowing as jest.Mock).mockImplementation(() => false)
    renderWithTheme(<Truncate>Hello world</Truncate>)
    const trigger = screen.getByText('Hello world')
    fireEvent.mouseOver(trigger)

    const tooltip = screen.queryByRole('tooltip')
    expect(tooltip).not.toBeInTheDocument()
  })

  test('Truncate active', async () => {
    ;(isOverflowing as jest.Mock).mockImplementation(() => true)
    renderWithTheme(
      <Box2 width="5rem">
        <Truncate>{longLabel}</Truncate>
      </Box2>
    )

    const trigger = screen.getAllByText(longLabel)[0]
    fireEvent.mouseOver(trigger)

    const tooltip = screen.getAllByText(longLabel)[1]
    await waitFor(() => expect(tooltip).toBeVisible())

    fireEvent.mouseOut(tooltip)
    await waitForElementToBeRemoved(() => screen.queryByRole('tooltip'))
  })

  test('Truncate detail', async () => {
    ;(isOverflowing as jest.Mock).mockImplementation(() => true)
    renderWithTheme(
      <Truncate description="description text">Hello World</Truncate>
    )

    const trigger = screen.getByText('Hello World')
    fireEvent.mouseOver(trigger)

    const tooltip = screen.getByText('description text')
    await waitFor(() => expect(tooltip).toBeVisible())

    fireEvent.mouseOut(tooltip)
    await waitForElementToBeRemoved(() => screen.queryByRole('tooltip'))
  })
})
