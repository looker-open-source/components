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
import { fireEvent, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { AllPresetTimeframes } from '../../../../types/relative_timeframe_types'
import { RelativeTimeframeCustom } from './RelativeTimeframeCustom'

const dateRegex = /\d{4}\/\d{2}\/\d{2}/

const getMockComponent = (props: any = {}) => {
  const defaultProps = {
    value: AllPresetTimeframes.Today,
    onCustomChange: jest.fn(),
  }
  return <RelativeTimeframeCustom {...defaultProps} {...props} />
}

const getSelectedDatesLabels = (container: HTMLElement) => {
  const selectedDates = container.querySelectorAll('[aria-selected="true"]')
  return Array.from(selectedDates).map((selectedDate) =>
    selectedDate.getAttribute('aria-label')
  )
}

describe('RelativeTimeframeCustom', () => {
  beforeEach(() => {
    const defaultDate = new Date('2019-01-01T00:00:00.000-08:00')
    jest.spyOn(Date, 'now').mockImplementation(() => defaultDate.getTime())
  })

  it('should default as expected when value is an AllPresetTimeframes', () => {
    const { container } = renderWithTheme(getMockComponent())
    // Should default the input fields to the current day.
    const fromDateInput = screen.getByTestId(
      'date-from-text-input'
    ) as HTMLInputElement
    const toDateInput = screen.getByTestId(
      'date-to-text-input'
    ) as HTMLInputElement
    expect(fromDateInput.value).toMatch(dateRegex)
    expect(toDateInput.value).toMatch(dateRegex)
    // Should select the current day by default.
    const selectedDatesLabels = getSelectedDatesLabels(container)
    expect(selectedDatesLabels).toEqual([])
  })

  it('should accept date range', async () => {
    const fromDate = new Date('2019-01-10T00:00:00.000-08:00')
    const toDate = new Date('2019-01-15T00:00:00.000-08:00')
    renderWithTheme(
      getMockComponent({
        value: {
          from: fromDate,
          to: toDate,
        },
      })
    )
    // Should default the input fields to the date range.
    const fromDateInput = screen.getByTestId(
      'date-from-text-input'
    ) as HTMLInputElement
    const toDateInput = screen.getByTestId(
      'date-to-text-input'
    ) as HTMLInputElement
    expect(fromDateInput.value).toBe('2019/01/10')
    expect(toDateInput.value).toBe('2019/01/15')
    fireEvent.click(screen.getByText('Open calendar'))
    await waitFor(() => {
      expect(screen.getByTitle('Thu Jan 10, 2019')).toHaveAttribute(
        'aria-selected',
        'true'
      )
    })
    expect(screen.getByTitle('Tue Jan 15, 2019')).toHaveAttribute(
      'aria-selected',
      'true'
    )
  })

  it('should handle updates', () => {
    const onCustomChange = jest.fn()
    renderWithTheme(getMockComponent({ onCustomChange }))
    const fromDateInput = screen.getByTestId(
      'date-from-text-input'
    ) as HTMLInputElement
    const toDateInput = screen.getByTestId(
      'date-to-text-input'
    ) as HTMLInputElement
    // Handle input text changes.
    fireEvent.change(toDateInput, { target: { value: '2019/01/12' } })
    fireEvent.change(fromDateInput, { target: { value: '2019/01/11' } })
    expect(fromDateInput.value).toMatchInlineSnapshot(`"2019/01/11"`)
    expect(toDateInput.value).toMatchInlineSnapshot(`"2019/01/12"`)
  })
})
