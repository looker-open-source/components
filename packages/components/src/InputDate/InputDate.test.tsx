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

import React from 'react'
import { fireEvent } from '@testing-library/react'
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

test('calls onChange prop when a day is clicked', () => {
  const mockProps = {
    defaultValue: new Date('June 3, 2019'),
    onChange: jest.fn(),
  }
  const { getByText } = renderWithTheme(<InputDate {...mockProps} />)
  expect(mockProps.onChange).not.toHaveBeenCalled()

  const date = getByText('15') // the 15th day of the month
  fireEvent.click(date)
  expect(mockProps.onChange).toHaveBeenCalledWith(
    new Date('June 15, 2019 12:00:00 PM')
  )
})

test('updates text input value when day is clicked', () => {
  const mockProps = {
    onChange: jest.fn(),
  }
  const { getByText, getByTestId } = renderWithTheme(
    <InputDate {...mockProps} />
  )
  expect(mockProps.onChange).not.toHaveBeenCalled()

  const input = getByTestId('text-input') as HTMLInputElement
  expect(input).toHaveValue('')

  const date = getByText('15') // the 15th day of the month
  fireEvent.click(date)

  expect(input).toHaveValue('02/15/2020')
})

test('fills TextInput with value, and updates when props.value changes', () => {
  const mockProps = {
    onChange: jest.fn(),
    value: new Date('June 3, 2019'),
  }
  const { getByTestId } = renderWithTheme(<InputDate {...mockProps} />)
  const input = getByTestId('text-input') as HTMLInputElement
  expect(input).toHaveValue('06/03/2019')
})

test('fills TextInput with defaultValue', () => {
  const mockProps = {
    defaultValue: new Date('June 3, 2019'),
    onChange: jest.fn(),
  }
  const { getByTestId } = renderWithTheme(<InputDate {...mockProps} />)
  const input = getByTestId('text-input') as HTMLInputElement
  expect(input).toHaveValue('06/03/2019')
})

test('validates text input to match localized date format', () => {
  const mockProps = {
    defaultValue: new Date('June 3, 2019'),
    onValidationFail: jest.fn(),
  }
  const { getByTestId } = renderWithTheme(<InputDate {...mockProps} />)
  const input = getByTestId('text-input') as HTMLInputElement

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

  const { getByText, container } = renderWithTheme(
    <InputDate localization={localizationProps} />
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
      <InputDate
        dateStringLocale={Locales.Korean}
        defaultValue={new Date(Date.now())}
      />
    )
    expect(getByDisplayValue('2020.02.01')).toBeInTheDocument()
  })
  test('Italian', () => {
    const { getByDisplayValue } = renderWithTheme(
      <InputDate
        dateStringLocale={Locales.Italian}
        defaultValue={new Date(Date.now())}
      />
    )
    expect(getByDisplayValue('01/02/2020')).toBeInTheDocument()
  })
  test('English', () => {
    const { getByDisplayValue } = renderWithTheme(
      <InputDate
        dateStringLocale={Locales.English}
        defaultValue={new Date(Date.now())}
      />
    )
    expect(getByDisplayValue('02/01/2020')).toBeInTheDocument()
  })
})
