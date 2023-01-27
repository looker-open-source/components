/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { renderWithTheme } from '@looker/components-test-utils'
import React from 'react'
import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { Chip } from './Chip'

// For testing the truncation logic
jest.mock('../utils/isOverflowing', () => ({
  isOverflowing: () => true,
}))

describe('Chip', () => {
  test('default', () => {
    renderWithTheme(<Chip>chip</Chip>)
    expect(screen.getByText('chip')).toBeInTheDocument()
  })

  test('disabled', () => {
    renderWithTheme(<Chip disabled>chip</Chip>)
    /* Disabled chips have no remove button */
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  test('Chip accepts a prefix and renders it with correct style', () => {
    renderWithTheme(<Chip prefix="role">admin</Chip>)
    expect(screen.getByText(/\brole\b/)).toHaveStyleRule('font-weight: 400')
  })

  test('onDelete works correctly', () => {
    const onDeleteTrigger = jest.fn()

    renderWithTheme(
      <Chip onDelete={onDeleteTrigger} data-testid="chip">
        clickable
      </Chip>
    )

    fireEvent.click(screen.getByRole('button'))
    expect(onDeleteTrigger).toHaveBeenCalledTimes(1)

    const chip = screen.getByTestId('chip')

    fireEvent.keyDown(chip, {
      key: 'Backspace',
    })
    expect(onDeleteTrigger).toHaveBeenCalledTimes(2)
  })

  test('truncation', async () => {
    // Label length doesn't matter since we're mocking isOverflowing
    renderWithTheme(<Chip>truncate me</Chip>)
    const chip = screen.getByText('truncate me')
    fireEvent.mouseOver(chip)

    expect(screen.getByRole('tooltip')).toHaveTextContent('truncate me')

    fireEvent.mouseOut(chip)
    await waitForElementToBeRemoved(() => screen.queryByRole('tooltip'))
  })
})
