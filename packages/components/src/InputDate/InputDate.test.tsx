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

import { Locales } from '../utils/i18n'
import { InputDate } from './InputDate'

const realDateNow = Date.now.bind(global.Date)

beforeEach(() => {
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  global.Date.now = jest.fn(() => 1580517818172)
})

afterEach(() => {
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  global.Date.now = realDateNow
  jest.clearAllMocks()
})

const ControlledInputDate = () => {
  const [value, setValue] = useState<Date | undefined>(new Date('June 3, 2019'))
  return (
    <>
      <button onClick={() => setValue(new Date('June 15, 2019'))}>
        June 15, 2019
      </button>
      <button onClick={() => setValue(new Date('January 1, 2012'))}>
        January 1, 2012
      </button>
      <InputDate value={value} onChange={(date?: Date) => setValue(date)} />
    </>
  )
}

test('calls onChange prop when a day is clicked', () => {
  const mockProps = {
    defaultValue: new Date('June 3, 2019'),
    onChange: jest.fn(),
  }
  renderWithTheme(<InputDate {...mockProps} />)
  expect(mockProps.onChange).not.toHaveBeenCalled()

  const date = screen.getByText('15') // the 15th day of the month
  fireEvent.click(date)
  expect(mockProps.onChange).toHaveBeenCalledWith(
    new Date('June 15, 2019 12:00:00 PM')
  )
})

test('updates text input value when day is clicked', () => {
  const mockProps = {
    onChange: jest.fn(),
  }
  renderWithTheme(<InputDate {...mockProps} />)
  expect(mockProps.onChange).not.toHaveBeenCalled()

  const input = screen.getByTestId('text-input') as HTMLInputElement
  expect(input).toHaveValue('')

  const date = screen.getByText('15') // the 15th day of the month
  fireEvent.click(date)

  expect(input).toHaveValue('02/15/2020')
})

test('fills TextInput with value, and updates when props.value changes', () => {
  const mockProps = {
    onChange: jest.fn(),
    value: new Date('June 3, 2019'),
  }
  renderWithTheme(<InputDate {...mockProps} />)
  const input = screen.getByTestId('text-input') as HTMLInputElement
  expect(input).toHaveValue('06/03/2019')
})

test('user can change the selected date via text input field', () => {
  renderWithTheme(<ControlledInputDate />)

  expect(screen.getByDisplayValue('06/03/2019')).toBeInTheDocument()
  fireEvent.click(screen.getByText('June 15, 2019')) // helper isDateInView returns true
  expect(screen.getByDisplayValue('06/15/2019')).toBeInTheDocument()
  fireEvent.click(screen.getByText('January 1, 2012')) // helper isDateInView returns false
  expect(screen.getByDisplayValue('01/01/2012')).toBeInTheDocument()
})

test('user can change the selected date via text input field', () => {
  renderWithTheme(<ControlledInputDate />)

  expect(screen.getByText('June 2019')).toBeInTheDocument()

  const TextInput = screen.getByDisplayValue('06/03/2019')
  fireEvent.change(TextInput, { target: { value: '01/01/2012' } })
  fireEvent.blur(TextInput) // update value on blur

  expect(screen.getByText('January 2012')).toBeInTheDocument()
})

test('user can clear the selected date by deleting text input content', () => {
  const mockProps = {
    onChange: jest.fn(),
    value: new Date('June 3, 2019'),
  }
  renderWithTheme(<InputDate {...mockProps} />)
  const TextInput = screen.getByDisplayValue('06/03/2019')
  fireEvent.change(TextInput, { target: { value: '' } })
  fireEvent.blur(TextInput) // update value on blur

  expect(mockProps.onChange).toHaveBeenCalledWith(undefined)
})

test('navigates from month to month', () => {
  const mockProps = {
    onChange: jest.fn(),
    value: new Date('June 3, 2019'),
  }
  renderWithTheme(<InputDate {...mockProps} />)
  expect(screen.getByText('June 2019')).toBeInTheDocument()
  fireEvent.click(screen.getByText('Previous Month'))
  expect(screen.getByText('May 2019')).toBeInTheDocument()
})

test('fills TextInput with defaultValue', () => {
  const mockProps = {
    defaultValue: new Date('June 3, 2019'),
    onChange: jest.fn(),
  }
  renderWithTheme(<InputDate {...mockProps} />)
  const input = screen.getByTestId('text-input') as HTMLInputElement
  expect(input).toHaveValue('06/03/2019')
})

test('validates text input to match localized date format', () => {
  const mockProps = {
    defaultValue: new Date('June 3, 2019'),
    onValidationFail: jest.fn(),
  }
  renderWithTheme(<InputDate {...mockProps} />)
  const input = screen.getByTestId('text-input') as HTMLInputElement

  fireEvent.change(input, { target: { value: '6/3/2019' } })
  fireEvent.blur(input) // validate on blur

  expect(mockProps.onValidationFail).not.toHaveBeenCalled()

  fireEvent.change(input, { target: { value: 'not-a-valid-date' } })
  fireEvent.blur(input) // validate on blur

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

  const { container } = renderWithTheme(
    <InputDate localization={localizationProps} />
  )

  expect(screen.getByText('Febbraio 2020')).toBeInTheDocument()
  expect(
    (container.querySelector('.DayPicker-WeekdaysRow') as HTMLElement)
      .textContent
  ).toMatchInlineSnapshot(`"LuMaMeGiVeSaDo"`)
})

describe('localizes text input', () => {
  test('Korean', () => {
    renderWithTheme(
      <InputDate
        dateStringLocale={Locales.Korean}
        defaultValue={new Date(Date.now())}
      />
    )
    expect(screen.getByDisplayValue('2020.02.01')).toBeInTheDocument()
  })
  test('Italian', () => {
    renderWithTheme(
      <InputDate
        dateStringLocale={Locales.Italian}
        defaultValue={new Date(Date.now())}
      />
    )
    expect(screen.getByDisplayValue('01/02/2020')).toBeInTheDocument()
  })
  test('English', () => {
    renderWithTheme(
      <InputDate
        dateStringLocale={Locales.English}
        defaultValue={new Date(Date.now())}
      />
    )
    expect(screen.getByDisplayValue('02/01/2020')).toBeInTheDocument()
  })
})
