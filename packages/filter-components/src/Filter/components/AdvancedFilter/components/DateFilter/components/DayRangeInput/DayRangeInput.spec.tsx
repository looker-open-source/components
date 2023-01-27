/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { DayRangeInput } from './DayRangeInput'

const onChangeMock = jest.fn()

beforeEach(() => {
  onChangeMock.mockReset()
})

test('renders a DayRangeInput', () => {
  renderWithTheme(
    <DayRangeInput
      onChange={onChangeMock}
      value={{ from: new Date(1914, 6, 28), to: new Date(1919, 5, 28) }}
    />
  )
  fireEvent.click(screen.getByText('1914/07/28 – 1919/06/28'))
  fireEvent.click(screen.getByText('Open calendar'))
  fireEvent.click(document)
})
