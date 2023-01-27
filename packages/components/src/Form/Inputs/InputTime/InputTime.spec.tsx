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

import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import type { InputTimeProps } from './InputTime'
import { InputTime } from './InputTime'

const globalConsole = global.console

beforeEach(() => {
  global.console = {
    error: jest.fn(),
    warn: jest.fn(),
  } as unknown as Console
})

afterEach(() => {
  jest.resetAllMocks()
  global.console = globalConsole
})

const selectSubInputs = (mockProps: any) => {
  renderWithTheme(<InputTime {...mockProps} />)
  const inputHour = screen.getByTestId('input-hour')
  const inputMinute = screen.getByTestId('input-minute')
  const inputPeriod = screen.getByTestId('input-period')

  return {
    inputHour,
    inputMinute,
    inputPeriod,
  }
}

test('fires onChange ONLY when all fields are filled in', () => {
  const mockProps: InputTimeProps = {
    onChange: jest.fn(),
  }

  const { inputHour, inputMinute, inputPeriod } = selectSubInputs(mockProps)

  fireEvent.keyDown(inputHour, {
    key: '1',
    keyCode: 49,
  })

  expect(mockProps.onChange).not.toHaveBeenCalled()

  fireEvent.keyDown(inputMinute, {
    key: '1',
    keyCode: 49,
  })

  expect(mockProps.onChange).not.toHaveBeenCalled()

  fireEvent.keyDown(inputPeriod, {
    key: 'p',
  })

  // convert '01:01 PM' to 24-hour time ('13:01') and call onChange
  expect(mockProps.onChange).toHaveBeenCalledWith('13:01')
})

test('fires onChange when any sub-input is cleared', () => {
  const mockProps: InputTimeProps = {
    onChange: jest.fn(),
    value: '14:52',
  }

  const { inputHour } = selectSubInputs(mockProps)

  expect(mockProps.onChange).not.toHaveBeenCalled()
  expect((inputHour as HTMLInputElement).value).toEqual('02')

  // reset sub-input value
  fireEvent.keyDown(inputHour, {
    key: 'Backspace',
  })

  expect((inputHour as HTMLInputElement).value).toEqual('')
  expect(mockProps.onChange).toHaveBeenCalledWith(undefined)
})

test('accepts a 24-hour time value', () => {
  const mockProps: InputTimeProps = {
    value: '14:52',
  }

  const { inputHour, inputMinute, inputPeriod } = selectSubInputs(mockProps)

  expect((inputHour as HTMLInputElement).value).toEqual('02')
  expect((inputMinute as HTMLInputElement).value).toEqual('52')
  expect((inputPeriod as HTMLInputElement).value).toEqual('PM')
})

test('accepts a 24-hour time defautValue', () => {
  const mockProps: InputTimeProps = {
    defaultValue: '14:52',
  }

  const { inputHour, inputMinute, inputPeriod } = selectSubInputs(mockProps)

  expect((inputHour as HTMLInputElement).value).toEqual('02')
  expect((inputMinute as HTMLInputElement).value).toEqual('52')
  expect((inputPeriod as HTMLInputElement).value).toEqual('PM')
})

test('ignores invalid time value string', () => {
  const mockProps: InputTimeProps = {
    value: 'cheesecake',
  }

  const { inputHour, inputMinute, inputPeriod } = selectSubInputs(mockProps)

  expect((inputHour as HTMLInputElement).value).toEqual('')
  expect((inputMinute as HTMLInputElement).value).toEqual('')
  expect((inputPeriod as HTMLInputElement).value).toEqual('')

  // eslint-disable-next-line no-console
  expect(console.error).toHaveBeenCalledWith(
    'Invalid time ("cheesecake") passed to <InputTime />. Value should be formatted as a 24-hour string (e.g. value="02:00" or value="23:15").'
  )
})

test('clears child input if an invalid number is entered', () => {
  const mockProps: InputTimeProps = {
    onChange: jest.fn(),
  }

  const { inputMinute } = selectSubInputs(mockProps)

  fireEvent.keyDown(inputMinute, {
    key: '7',
    keyCode: 55,
  })

  expect((inputMinute as HTMLInputElement).value).toEqual('07')

  // pressing 7 a second time would be an attempt to enter "77" into the minute field
  fireEvent.keyDown(inputMinute, {
    key: '7',
    keyCode: 55,
  })

  // invalid input causes field to clear
  expect((inputMinute as HTMLInputElement).value).toEqual('')
})

test('renders 24 hour formatted time', () => {
  const mockProps: any = {
    format: '24h',
    value: '23:32',
  }

  renderWithTheme(<InputTime {...mockProps} />)
  const inputHour = screen.getByTestId('input-hour')
  const inputMinute = screen.getByTestId('input-minute')
  const inputPeriod = screen.queryByTestId('input-period')

  expect((inputHour as HTMLInputElement).value).toEqual('23')
  expect((inputMinute as HTMLInputElement).value).toEqual('32')
  expect(inputPeriod).not.toBeInTheDocument()
})

test('up/down arrow keys cycle through possible values', () => {
  const mockProps: InputTimeProps = {}

  const { inputHour, inputMinute, inputPeriod } = selectSubInputs(mockProps)

  // HOUR
  // --------------------------------------
  fireEvent.keyDown(inputHour, {
    key: 'ArrowUp',
    keyCode: 38,
  })
  expect((inputHour as HTMLInputElement).value).toEqual('01')

  fireEvent.keyDown(inputHour, {
    key: 'ArrowDown',
    keyCode: 40,
  })
  expect((inputHour as HTMLInputElement).value).toEqual('12')

  // MINUTE
  // --------------------------------------
  fireEvent.keyDown(inputMinute, {
    key: 'ArrowUp',
    keyCode: 38,
  })
  expect((inputMinute as HTMLInputElement).value).toEqual('01')

  fireEvent.keyDown(inputMinute, {
    key: 'ArrowDown',
    keyCode: 40,
  })
  fireEvent.keyDown(inputMinute, {
    key: 'ArrowDown',
    keyCode: 40,
  })
  expect((inputMinute as HTMLInputElement).value).toEqual('59')

  // PERIOD
  // --------------------------------------
  fireEvent.keyDown(inputPeriod, {
    key: 'ArrowUp',
    keyCode: 38,
  })
  expect((inputPeriod as HTMLInputElement).value).toEqual('PM')

  fireEvent.keyDown(inputPeriod, {
    key: 'ArrowDown',
    keyCode: 40,
  })
  expect((inputPeriod as HTMLInputElement).value).toEqual('AM')
})

test('fires onValidationFail callback when an invalid time value prop is passed in', () => {
  const mockProps: InputTimeProps = {
    onValidationFail: jest.fn(),
    value: 'Stardate 2004.14',
  }

  expect(mockProps.onValidationFail).not.toHaveBeenCalled()

  const { inputHour, inputMinute, inputPeriod } = selectSubInputs(mockProps)

  expect(mockProps.onValidationFail).toHaveBeenCalledTimes(1)
  expect((inputHour as HTMLInputElement).value).toEqual('')
  expect((inputMinute as HTMLInputElement).value).toEqual('')
  expect((inputPeriod as HTMLInputElement).value).toEqual('')
})
