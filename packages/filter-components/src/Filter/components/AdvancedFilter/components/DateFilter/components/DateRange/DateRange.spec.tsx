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
import type { FilterModel } from '@looker/filter-expressions'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { DateRange } from './DateRange'

describe('DateRange', () => {
  const mockItem = {
    id: '1',
    start: {
      year: 2018,
      month: 1,
      day: 1,
      hour: 12,
      minute: 2,
    },
    end: {
      year: 2018,
      month: 2,
      day: 1,
      hour: 13,
      minute: 4,
    },
  } as FilterModel
  const onChangeMock = jest.fn()

  beforeEach(() => {
    onChangeMock.mockReset()
  })

  it('should render the start and end date', () => {
    renderWithTheme(<DateRange item={mockItem} onChange={onChangeMock} />)
    expect(screen.getByText('2018/01/01')).toBeVisible()
    expect(screen.getByText('2018/02/01')).toBeVisible()
  })

  it('should render the start and end date and time when showTime is set', () => {
    renderWithTheme(
      <DateRange item={mockItem} onChange={onChangeMock} showTime={true} />
    )
    expect(screen.getByText('2018/01/01')).toBeVisible()
    expect(screen.getByText('2018/02/01')).toBeVisible()
    expect(screen.getByDisplayValue('12:02 pm')).toBeVisible()
    expect(screen.getByDisplayValue('01:04 pm')).toBeVisible()
  })

  it('should default to now when start date is not specified', () => {
    jest.spyOn(Date, 'now').mockImplementation(() => 1516046400000)
    const item = { ...mockItem, start: undefined }
    renderWithTheme(<DateRange item={item} onChange={onChangeMock} />)
    expect(screen.getByText('2018/01/15')).toBeVisible()
    expect(screen.getByText('2018/02/01')).toBeVisible()
  })

  it('should default to now when end date is not specified', () => {
    jest.spyOn(Date, 'now').mockImplementation(() => 1518724800000)
    const item = { ...mockItem, end: undefined }
    renderWithTheme(<DateRange item={item} onChange={onChangeMock} />)
    expect(screen.getByText('2018/01/01')).toBeVisible()
    expect(screen.getByText('2018/02/15')).toBeVisible()
  })

  it('should call our callback function when the start time changes', () => {
    renderWithTheme(
      <DateRange item={mockItem} onChange={onChangeMock} showTime={true} />
    )
    const startTime = screen.getByDisplayValue('12:02 pm')
    fireEvent.click(startTime) // open options menu

    const newStartTime = screen.getByText('01:00 pm')
    fireEvent.click(newStartTime) // select new time
    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "1",
          Object {
            "start": Object {
              "day": 1,
              "hour": 13,
              "minute": 0,
              "month": 1,
              "second": 0,
              "year": 2018,
            },
          },
        ],
      ]
    `)
  })

  it('should call our callback function when the end time changes', () => {
    renderWithTheme(
      <DateRange item={mockItem} onChange={onChangeMock} showTime={true} />
    )
    const endTime = screen.getByDisplayValue('01:04 pm')
    fireEvent.click(endTime) // open options menu

    const newEndTime = screen.getByText('02:00 pm')
    fireEvent.click(newEndTime) // select new time

    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "1",
          Object {
            "end": Object {
              "day": 1,
              "hour": 14,
              "minute": 0,
              "month": 2,
              "second": 0,
              "year": 2018,
            },
          },
        ],
      ]
    `)
  })

  it('should push the end time when start time is set after end', () => {
    renderWithTheme(<DateRange item={mockItem} onChange={onChangeMock} />)

    fireEvent.click(screen.getByText('2018/01/01'))
    fireEvent.click(screen.getByText('Open calendar'))
    fireEvent.click(screen.getByText('next month'))
    fireEvent.click(screen.getByTitle('Thu Feb 15, 2018'))

    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "1",
          Object {
            "end": Object {
              "day": 16,
              "hour": 12,
              "minute": 2,
              "month": 2,
              "second": 0,
              "year": 2018,
            },
            "start": Object {
              "day": 15,
              "hour": 12,
              "minute": 2,
              "month": 2,
              "second": 0,
              "year": 2018,
            },
          },
        ],
      ]
    `)

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  it('should push the start time when end time is set before start', () => {
    renderWithTheme(<DateRange item={mockItem} onChange={onChangeMock} />)

    fireEvent.click(screen.getByText('2018/02/01'))
    fireEvent.click(screen.getByText('Open calendar'))
    fireEvent.click(screen.getByText('previous month'))
    fireEvent.click(screen.getByText('previous month'))
    fireEvent.click(screen.getByTitle('Fri Dec 15, 2017'))

    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "1",
          Object {
            "end": Object {
              "day": 15,
              "hour": 13,
              "minute": 4,
              "month": 12,
              "second": 0,
              "year": 2017,
            },
            "start": Object {
              "day": 14,
              "hour": 13,
              "minute": 4,
              "month": 12,
              "second": 0,
              "year": 2017,
            },
          },
        ],
      ]
    `)

    // Close popover to silence act() warning
    fireEvent.click(document)
  })
})
