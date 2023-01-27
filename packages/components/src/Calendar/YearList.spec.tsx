/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import en from 'date-fns/locale/en-US'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import type { YearListProps } from './types'
import { YearList } from './YearList'

describe('YearList', () => {
  const date = new Date('January 12, 2022')
  const defaultProps: YearListProps = {
    baseMonth: date,
    currentDate: date,
    locale: en,
    onMonthChange: jest.fn(),
    onMonthClick: jest.fn(),
    selectedMonth: date,
    setBaseMonth: jest.fn(),
  }

  test('renders 10 years before & after', () => {
    renderWithTheme(<YearList {...defaultProps} />)
    const first = screen.getByText('2012')
    const last = screen.getByText('2032')
    expect(first).toBeVisible()
    expect(last).toBeVisible()
    // Only 3 years fully rendered
    expect(screen.getAllByRole('button')).toHaveLength(36)
  })
})
