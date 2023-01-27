/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { DateInput } from './DateInput'

test('renders a DateInput', () => {
  const onChangeMock = jest.fn()
  renderWithTheme(
    <DateInput date={new Date(1863, 0, 1)} onChange={onChangeMock} />
  )
  fireEvent.click(screen.getByText('1863/01/01'))
  fireEvent.click(screen.getByText('Open calendar'))
  fireEvent.click(screen.getByTitle(/Jan 04, 1863/))
  expect(onChangeMock.mock.calls).toEqual([[new Date(1863, 0, 4)]])
  fireEvent.click(document)
})
