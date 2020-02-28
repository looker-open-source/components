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

import { InputDateRange } from './InputDateRange'

const realDateNow = Date.now.bind(global.Date)

beforeEach(() => {
  global.Date.now = jest.fn(() => 1580517818172)
})

afterEach(() => {
  global.Date.now = realDateNow // reset Date.now mock
  jest.clearAllMocks()
})

test('calls onChange prop when a day is clicked', () => {
  const mockProps = {
    defaultValue: {
      from: new Date('June 3, 2019'),
      to: new Date('June 9, 2019'),
    },
    onChange: jest.fn(),
  }
  const { getAllByText } = renderWithTheme(<InputDateRange {...mockProps} />)
  expect(mockProps.onChange).not.toHaveBeenCalled()

  const date = getAllByText('15')[0] // the 15th day of the month
  fireEvent.click(date)
  expect(mockProps.onChange).toHaveBeenCalledWith({
    from: new Date('June 3, 2019'),
    to: new Date('June 15, 2019 12:00'),
  })
})

test('calls onChange prop when a TextInput is modified', () => {
  const mockProps = {
    defaultValue: {
      from: new Date('June 3, 2019'),
      to: new Date('June 9, 2019'),
    },
    onChange: jest.fn(),
  }
  const { getByTestId } = renderWithTheme(<InputDateRange {...mockProps} />)
  const toInput = getByTestId('date-to-text-input') as HTMLInputElement
  const fromInput = getByTestId('date-from-text-input') as HTMLInputElement

  expect(mockProps.onChange).not.toHaveBeenCalled()

  fireEvent.focus(fromInput)
  fireEvent.change(fromInput, { target: { value: '6/15/2019' } })

  expect(mockProps.onChange).toHaveBeenCalledWith({
    from: new Date('June 15, 2019'),
    to: new Date('June 15, 2019'),
  })

  fireEvent.focus(toInput)
  fireEvent.change(toInput, { target: { value: '6/25/2019' } })

  expect(mockProps.onChange).toHaveBeenCalledWith({
    from: new Date('June 15, 2019'),
    to: new Date('June 25, 2019'),
  })
})

test('updates text input value when day is clicked', () => {
  const mockProps = {
    onChange: jest.fn(),
  }
  const { getAllByText, getByTestId } = renderWithTheme(
    <InputDateRange {...mockProps} />
  )

  const fromInput = getByTestId('date-from-text-input') as HTMLInputElement
  const toInput = getByTestId('date-to-text-input') as HTMLInputElement
  const startDate = getAllByText('2')[0] // the 2nd day of the month (left calendar)
  const endDate = getAllByText('15')[1] // the 15th day of the month (right calendar)

  expect(fromInput.value).toEqual('')
  expect(toInput.value).toEqual('')

  fireEvent.click(startDate)

  expect(fromInput.value).toEqual('02/02/2020')
  expect(toInput.value).toEqual('02/02/2020')

  fireEvent.click(endDate)

  expect(fromInput.value).toEqual('02/02/2020')
  expect(toInput.value).toEqual('03/15/2020')
})

test('defaultValue prop fills TextInputs with correct dates', () => {
  const mockProps = {
    defaultValue: {
      from: new Date('June 3, 2019'),
      to: new Date('June 9, 2019'),
    },
    onChange: jest.fn(),
  }
  const { getByTestId } = renderWithTheme(<InputDateRange {...mockProps} />)
  const fromInput = getByTestId('date-from-text-input') as HTMLInputElement
  const toInput = getByTestId('date-to-text-input') as HTMLInputElement

  expect(fromInput.value).toEqual('06/03/2019')
  expect(toInput.value).toEqual('06/09/2019')
})

test('defaultValue highlights the correct dates in the Calendar', () => {
  const mockProps = {
    defaultValue: {
      from: new Date('June 3, 2019'),
      to: new Date('June 5, 2019'),
    },
    onChange: jest.fn(),
  }
  const { getByLabelText } = renderWithTheme(<InputDateRange {...mockProps} />)

  const dayOne = getByLabelText('Mon Jun 3, 2019')
  const dayTwo = getByLabelText('Tue Jun 4, 2019')
  const dayThree = getByLabelText('Wed Jun 5, 2019')

  const dayBefore = getByLabelText('Sun Jun 2, 2019')
  const dayAfter = getByLabelText('Thu Jun 6, 2019')

  expect(dayOne.getAttribute('aria-selected')).toEqual('true')
  expect(dayTwo.getAttribute('aria-selected')).toEqual('true')
  expect(dayThree.getAttribute('aria-selected')).toEqual('true')

  expect(dayBefore.getAttribute('aria-selected')).toEqual('false')
  expect(dayAfter.getAttribute('aria-selected')).toEqual('false')
})

test('validates FROM text input to match localized date format', () => {
  const mockProps = {
    defaultValue: {
      from: new Date('June 3, 2019'),
      to: new Date('June 9, 2019'),
    },
    onValidationFail: jest.fn(),
  }
  const { getByTestId } = renderWithTheme(<InputDateRange {...mockProps} />)
  const fromInput = getByTestId('date-from-text-input') as HTMLInputElement

  fireEvent.change(fromInput, { target: { value: '6/3/2019' } })
  fireEvent.blur(fromInput) // validate on blur

  expect(mockProps.onValidationFail).not.toHaveBeenCalled()

  fireEvent.change(fromInput, { target: { value: 'not-a-valid-date' } })
  fireEvent.blur(fromInput) // validate on blur

  expect(mockProps.onValidationFail).toHaveBeenCalledTimes(1)
})

test('validates TO text input to match localized date format', () => {
  const mockProps = {
    defaultValue: {
      from: new Date('June 3, 2019'),
      to: new Date('June 9, 2019'),
    },
    onValidationFail: jest.fn(),
  }
  const { getByTestId } = renderWithTheme(<InputDateRange {...mockProps} />)
  const toInput = getByTestId('date-to-text-input') as HTMLInputElement

  fireEvent.focus(toInput) // activate `date-to` input to ensure validation reads from correct value
  fireEvent.change(toInput, { target: { value: '6/15/2019' } })
  fireEvent.blur(toInput) // validate on blur

  expect(mockProps.onValidationFail).not.toHaveBeenCalled()

  fireEvent.change(toInput, { target: { value: 'nope-not-valid' } })
  fireEvent.blur(toInput) // validate on blur

  expect(mockProps.onValidationFail).toHaveBeenCalledTimes(1)
})
