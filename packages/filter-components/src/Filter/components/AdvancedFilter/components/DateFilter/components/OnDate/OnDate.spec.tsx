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
import { OnDate } from './OnDate'

describe('OnDate', () => {
  const mockItem = {
    id: '1',
    date: {
      year: 2018,
      month: 1,
      day: 1,
    },
  } as FilterModel
  const onChangeMock = jest.fn()

  it('should render the passed in date', () => {
    renderWithTheme(<OnDate item={mockItem} onChange={onChangeMock} />)
    expect(screen.getByText('2018/01/01')).toBeVisible()
  })

  it('should render now when no date is passed in', () => {
    jest.spyOn(Date, 'now').mockImplementation(() => 1516046400000)
    renderWithTheme(
      <OnDate item={{ id: '1' } as FilterModel} onChange={onChangeMock} />
    )
    expect(screen.getByText('2018/01/15')).toBeVisible()
  })

  it('should fire onChange with the new date when changed', () => {
    renderWithTheme(<OnDate item={mockItem} onChange={onChangeMock} />)

    fireEvent.click(screen.getByText('2018/01/01'))
    fireEvent.click(screen.getByText('Open calendar'))
    fireEvent.click(screen.getByText('next month'))
    fireEvent.click(screen.getByTitle('Thu Feb 15, 2018'))

    expect(onChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          "1",
          Object {
            "date": Object {
              "day": 15,
              "month": 2,
              "year": 2018,
            },
          },
        ],
      ]
    `)
    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  it('should fire onChange with the new date without time (DX-5280)', () => {
    const time = { hour: 1, minute: 2, second: 3 }
    const itemWithTime = {
      ...mockItem,
      date: { ...mockItem.date, ...time },
    } as FilterModel
    onChangeMock.mockReset()
    renderWithTheme(<OnDate item={itemWithTime} onChange={onChangeMock} />)

    fireEvent.click(screen.getByText('2018/01/01'))
    fireEvent.click(screen.getByText('Open calendar'))
    fireEvent.click(screen.getByTitle('Mon Jan 15, 2018'))

    expect(onChangeMock).toHaveBeenCalledWith('1', {
      date: { year: 2018, month: 1, day: 15 },
    })
    // Close popover to silence act() warning
    fireEvent.click(document)
  })
})
