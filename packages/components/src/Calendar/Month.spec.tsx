/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

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
