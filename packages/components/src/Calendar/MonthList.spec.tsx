/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import en from 'date-fns/locale/en-US'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import type { MonthListProps } from './types'
import { MonthList } from './MonthList'

describe('MonthList', () => {
  const date = new Date('January 12, 2022')
  const defaultProps: MonthListProps = {
    baseMonth: date,
    currentDate: date,
    datesSelected: [],
    firstDayOfWeek: 0,
    locale: en,
    onDraftSelect: jest.fn(),
    onMonthChange: jest.fn(),
    onSelect: jest.fn(),
    setBaseMonth: jest.fn(),
  }

  test('renders 6 months before & after', () => {
    renderWithTheme(<MonthList {...defaultProps} />)
    const first = screen.getByText('Jul 2021')
    const last = screen.getByText('Jul 2022')
    expect(first).toBeVisible()
    expect(last).toBeVisible()
    // Only 3 months fully rendered
    expect(screen.getAllByRole('button')).toHaveLength(90)
  })
})
