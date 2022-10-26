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
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MonthPickerNav } from './MonthPickerNav'

describe('MonthPickerNav', () => {
  const date = new Date('January 12, 2022')

  test('updates the month via click', () => {
    const onMonthChangeMock = jest.fn()
    const onCloseMock = jest.fn()
    renderWithTheme(
      <MonthPickerNav
        date={date}
        locale={en}
        onMonthChange={onMonthChangeMock}
        onClose={onCloseMock}
      />
    )

    // Prev & next years are also rendered
    userEvent.click(screen.getAllByText('Feb')[1])

    expect(onMonthChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          2022-02-12T08:00:00.000Z,
        ],
      ]
    `)
  })

  test('updates the year via input', () => {
    const onMonthChangeMock = jest.fn()
    const onCloseMock = jest.fn()
    renderWithTheme(
      <MonthPickerNav
        date={date}
        locale={en}
        onMonthChange={onMonthChangeMock}
        onClose={onCloseMock}
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('2022')

    fireEvent.change(input, { target: { value: '2021' } })
    fireEvent.blur(input)
    // Prev & next years are also rendered
    userEvent.click(screen.getAllByText('Feb')[1])

    expect(onMonthChangeMock.mock.calls).toMatchInlineSnapshot(`
      Array [
        Array [
          2021-02-12T08:00:00.000Z,
        ],
      ]
    `)
  })

  test('updates the year via prev/next', () => {
    const onMonthChangeMock = jest.fn()
    const onCloseMock = jest.fn()
    renderWithTheme(
      <MonthPickerNav
        date={date}
        locale={en}
        onMonthChange={onMonthChangeMock}
        onClose={onCloseMock}
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('2022')

    fireEvent.click(screen.getByRole('button', { name: 'previous year' }))
    expect(input).toHaveValue('2021')
    fireEvent.click(screen.getByRole('button', { name: 'next year' }))
    expect(input).toHaveValue('2022')
  })
})
