/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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

import React, { useState } from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { RangeModifier } from 'react-day-picker'
import { Locales } from '../utils/i18n'
import { InputDateRange } from './InputDateRange'

const realDateNow = Date.now.bind(global.Date)

beforeEach(() => {
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  global.Date.now = jest.fn(() => 1580517818172)
})

afterEach(() => {
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  global.Date.now = realDateNow // reset Date.now mock
  jest.clearAllMocks()
})

const ControlledInputDateRange = () => {
  const [value, setValue] = useState<Partial<RangeModifier> | undefined>({
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019'),
  })
  return (
    <>
      <button
        onClick={() =>
          setValue({
            from: new Date('June 5, 2019'),
            to: new Date('June 15, 2019'),
          })
        }
      >
        June 5 - 15, 2019
      </button>
      <button
        onClick={() =>
          setValue({
            from: new Date('January 1, 2012'),
            to: new Date('February 15, 2012'),
          })
        }
      >
        January 1 - February 15, 2012
      </button>
      <InputDateRange
        value={value}
        onChange={(date?: Partial<RangeModifier> | undefined) => setValue(date)}
      />
    </>
  )
}

test('value can be controlled externally', () => {
  renderWithTheme(<ControlledInputDateRange />)

  expect(screen.getByDisplayValue('06/03/2019')).toBeInTheDocument()
  fireEvent.click(screen.getByText('June 5 - 15, 2019')) // helper isDateRangeInView returns true
  expect(screen.getByDisplayValue('06/15/2019')).toBeInTheDocument()
  fireEvent.click(screen.getByText('January 1 - February 15, 2012')) // helper isDateRangeInView returns false
  expect(screen.getByDisplayValue('01/01/2012')).toBeInTheDocument()
})

test('user can change the selected date via text input field', () => {
  renderWithTheme(<ControlledInputDateRange />)

  expect(screen.getByText('June 2019')).toBeInTheDocument()

  const FromTextInput = screen.getByDisplayValue('06/03/2019')
  const ToTextInput = screen.getByDisplayValue('06/09/2019')
  fireEvent.focus(ToTextInput) // execute helper toggleActiveDateInput
  fireEvent.blur(ToTextInput) // execute helper toggleActiveDateInput
  fireEvent.focus(FromTextInput) // execute helper toggleActiveDateInput
  fireEvent.change(FromTextInput, { target: { value: '01/01/2012' } })
  fireEvent.blur(FromTextInput) // update value on blur

  expect(screen.getByText('January 2012')).toBeInTheDocument()
})

test('navigates from month to month', () => {
  const mockProps = {
    onChange: jest.fn(),
    value: {
      from: new Date('June 3, 2019'),
      to: new Date('June 9, 2019'),
    },
  }
  renderWithTheme(<InputDateRange {...mockProps} />)
  expect(screen.getByText('June 2019')).toBeInTheDocument()
  fireEvent.click(screen.getByText('Previous Month'))
  expect(screen.getByText('May 2019')).toBeInTheDocument()
  fireEvent.click(screen.getByText('May 2019')) // jump to "now" (mocked date.now)
  fireEvent.click(screen.getByText('Next Month'))
  expect(screen.getByText('March 2020')).toBeInTheDocument()
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

test('selects a single day when clicking on one of the date endpoints', () => {
  const mockProps = {
    defaultValue: {
      from: new Date('June 3, 2019 12:00'),
      to: new Date('June 9, 2019 12:00'),
    },
    onChange: jest.fn(),
  }
  const { getAllByText } = renderWithTheme(<InputDateRange {...mockProps} />)
  expect(mockProps.onChange).not.toHaveBeenCalled()

  const date = getAllByText('3')[0] // the 3rd day of the month (beggining of range)
  fireEvent.click(date)
  // both from and to were set to June 3rd
  expect(mockProps.onChange).toHaveBeenCalledWith({
    from: new Date('June 3, 2019 12:00'),
    to: new Date('June 3, 2019 12:00'),
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

  expect(fromInput).toHaveValue('')
  expect(toInput).toHaveValue('')

  fireEvent.click(startDate)

  expect(fromInput).toHaveValue('02/02/2020')
  expect(toInput).toHaveValue('02/02/2020')

  fireEvent.click(endDate)

  expect(fromInput).toHaveValue('02/02/2020')
  expect(toInput).toHaveValue('03/15/2020')
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

  expect(fromInput).toHaveValue('06/03/2019')
  expect(toInput).toHaveValue('06/09/2019')
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

  const dayOne = getByLabelText('Mon Jun 03 2019')
  const dayTwo = getByLabelText('Tue Jun 04 2019')
  const dayThree = getByLabelText('Wed Jun 05 2019')

  const dayBefore = getByLabelText('Sun Jun 02 2019')
  const dayAfter = getByLabelText('Thu Jun 06 2019')

  expect(dayOne).toHaveAttribute('aria-selected', 'true')
  expect(dayTwo).toHaveAttribute('aria-selected', 'true')
  expect(dayThree).toHaveAttribute('aria-selected', 'true')

  expect(dayBefore).toHaveAttribute('aria-selected', 'false')
  expect(dayAfter).toHaveAttribute('aria-selected', 'false')
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

test('localizes calendar', () => {
  const months = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
  ]
  const weekdaysShort = ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa']
  const firstDayOfWeek = 1 // monday
  const localizationProps = { firstDayOfWeek, months, weekdaysShort }

  const { getByText, container } = renderWithTheme(
    <InputDateRange localization={localizationProps} />
  )

  expect(getByText('Febbraio 2020')).toBeInTheDocument()
  expect(
    (container.querySelector('.DayPicker-WeekdaysRow') as HTMLElement)
      .textContent
  ).toMatchInlineSnapshot(`"LuMaMeGiVeSaDo"`)
})

describe('localizes text input', () => {
  test('Korean', () => {
    const { getByDisplayValue } = renderWithTheme(
      <InputDateRange
        dateStringLocale={Locales.Korean}
        defaultValue={{
          from: new Date(Date.now()),
          to: new Date('May 2, 2020'),
        }}
      />
    )
    expect(getByDisplayValue('2020.02.01')).toBeInTheDocument()
  })
  test('Italian', () => {
    const { getByDisplayValue } = renderWithTheme(
      <InputDateRange
        dateStringLocale={Locales.Italian}
        defaultValue={{
          from: new Date(Date.now()),
          to: new Date('May 2, 2020'),
        }}
      />
    )
    expect(getByDisplayValue('01/02/2020')).toBeInTheDocument()
  })
  test('English', () => {
    const { getByDisplayValue } = renderWithTheme(
      <InputDateRange
        dateStringLocale={Locales.English}
        defaultValue={{
          from: new Date(Date.now()),
          to: new Date('May 2, 2020'),
        }}
      />
    )
    expect(getByDisplayValue('02/01/2020')).toBeInTheDocument()
  })
})
