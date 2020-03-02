/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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

import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { NavbarElementProps } from 'react-day-picker'
import { CalendarContext, CalendarContextValue } from './CalendarContext'

import { CalendarNav } from './CalendarNav'

const realDateNow = Date.now.bind(global.Date)

beforeEach(() => {
  global.Date.now = jest.fn(() => 1580517818172)
})

afterEach(() => {
  global.Date.now = realDateNow // reset Date.now mock
  jest.clearAllMocks()
})

const mockProps: Partial<NavbarElementProps> = {
  labels: { nextMonth: 'next month', previousMonth: 'prev month' },
  locale: 'en',
  localeUtils: {
    formatMonthTitle: jest.fn(),
  },
  month: new Date('June 1, 2019'),
  nextMonth: new Date('July 1, 2019'),
  previousMonth: new Date('May 1, 2019'),
  showNextButton: true,
  showPreviousButton: true,
}

const mockContext: CalendarContextValue = {
  onNextClick: jest.fn(),
  onNowClick: jest.fn(),
  onPrevClick: jest.fn(),
  showNextButton: true,
  showPreviousButton: true,
  size: 'medium',
}

test('clicking "previous month" calls context.onNavClick with props.previousMonth', () => {
  const { getByText } = renderWithTheme(
    <CalendarContext.Provider value={mockContext}>
      <CalendarNav {...(mockProps as NavbarElementProps)} />
    </CalendarContext.Provider>
  )

  expect(mockContext.onPrevClick).toHaveBeenCalledTimes(0)

  const prev = getByText('Caret Left')
  fireEvent.click(prev)
  expect(mockContext.onPrevClick).toHaveBeenCalledWith(mockProps.previousMonth)
})

test('clicking "next month" calls context.onNavClick with props.nextMonth', () => {
  const { getByText } = renderWithTheme(
    <CalendarContext.Provider value={mockContext}>
      <CalendarNav {...(mockProps as NavbarElementProps)} />
    </CalendarContext.Provider>
  )

  expect(mockContext.onNextClick).toHaveBeenCalledTimes(0)

  const next = getByText('Caret Right')
  fireEvent.click(next)
  expect(mockContext.onNextClick).toHaveBeenCalledWith(mockProps.nextMonth)
})

test('clicking label text calls context.onNavClick with Date.now()', () => {
  mockProps.localeUtils.formatMonthTitle.mockReturnValue('June 2019')

  const { getByText } = renderWithTheme(
    <CalendarContext.Provider value={mockContext}>
      <CalendarNav {...(mockProps as NavbarElementProps)} />
    </CalendarContext.Provider>
  )

  expect(mockContext.onNowClick).toHaveBeenCalledTimes(0)

  const label = getByText('June 2019')
  fireEvent.click(label)
  expect(mockContext.onNowClick).toHaveBeenCalledWith(new Date(Date.now())) // mocked date.now value
})
