/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import en from 'date-fns/locale/en-US'
import es from 'date-fns/locale/es'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import type { MonthPropsWithScroll } from './Month'
import { Month } from './Month'

describe('Month', () => {
  const date = new Date('May 1, 2022')
  const defaultProps: MonthPropsWithScroll = {
    date,
    datesSelected: [],
    firstDayOfWeek: 0,
    fullRender: true,
    index: 0,
    locale: en,
    onDraftSelect: jest.fn(),
    onSelect: jest.fn(),
    setItemPosition: jest.fn(),
  }

  test('renders may 2022 with en locale', () => {
    renderWithTheme(<Month {...defaultProps} />)
    expect(screen.getByText('May 2022')).toBeVisible()
    expect(screen.getByText('1')).toBeVisible()
  })

  test('renders may 2022 with es locale', () => {
    const esProps = { ...defaultProps, firstDayOfWeek: 1, locale: es }
    renderWithTheme(<Month {...esProps} />)
    expect(screen.getByText('may 2022')).toBeVisible()
    expect(screen.getByText('1')).toBeVisible()
  })
})
