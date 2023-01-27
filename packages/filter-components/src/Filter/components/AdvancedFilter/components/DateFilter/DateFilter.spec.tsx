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
import { renderWithTheme } from '@looker/components-test-utils'
import type { DateFilterType, FilterModel } from '@looker/filter-expressions'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { DateFilter } from './DateFilter'

describe('Date filter test', () => {
  it('should render a DateFilter', () => {
    const item = {
      id: '1',
      type: 'anyvalue',
    } as any as FilterModel<DateFilterType>
    renderWithTheme(
      <DateFilter
        item={item}
        filterType="date"
        onChange={jest.fn()}
        showAdd={false}
        showName={true}
        showRemove={false}
        showOperator={false}
        showMatchesAdvanced={false}
        onAdd={jest.fn()}
        onRemove={jest.fn()}
      />
    )
    expect(screen.getByRole('textbox')).toHaveValue('is any time')
  })

  it('should render a DateFilter with type day', () => {
    const item = {
      id: '1',
      type: 'day',
      day: 'yesterday',
    } as any as FilterModel<DateFilterType>
    renderWithTheme(
      <DateFilter
        item={item}
        filterType="date"
        onChange={jest.fn()}
        showAdd={false}
        showName={true}
        showRemove={false}
        showOperator={false}
        showMatchesAdvanced={false}
        onAdd={jest.fn()}
        onRemove={jest.fn()}
      />
    )

    expect(screen.getByDisplayValue('yesterday')).toBeVisible()
    expect(screen.getByDisplayValue('matches (advanced)')).toBeVisible()
  })

  it('should render a DateFilter with time dropdown(s)', () => {
    const item = {
      id: '1',
      type: 'range',
    } as any as FilterModel<DateFilterType>
    renderWithTheme(
      <DateFilter
        item={item}
        filterType="date_time"
        onChange={jest.fn()}
        showAdd={false}
        showName={true}
        showRemove={false}
        showOperator={false}
        showMatchesAdvanced={false}
        onAdd={jest.fn()}
        onRemove={jest.fn()}
      />
    )

    expect(screen.getAllByPlaceholderText('Select time')).toHaveLength(2)
  })

  it('New row should default to 1 month', () => {
    const item = {
      id: '1',
      is: true,
      type: 'past' as const,
      value: [3],
      unit: 'week',
    }
    const onAddMock = jest.fn()

    renderWithTheme(
      <DateFilter
        item={item}
        filterType="date_time"
        onChange={jest.fn()}
        showAdd={true}
        showName={true}
        showRemove={false}
        showOperator={false}
        showMatchesAdvanced={false}
        onAdd={onAddMock}
        onRemove={jest.fn()}
      />
    )

    fireEvent.click(screen.getByRole('button'))
    expect(onAddMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          Object {
            "id": "1",
            "is": true,
            "type": "past",
            "unit": "month",
            "value": 1,
          },
          true,
        ],
      ]
    `)
  })
})
