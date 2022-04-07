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

import React, { useState } from 'react'
import { act, fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import ital from 'date-fns/locale/it'
import { InputDate } from './InputDate'

const realDateNow = Date.now.bind(global.Date)

beforeEach(() => {
  jest.useFakeTimers()
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  global.Date.now = jest.fn(() => 1580567580000)
})

afterEach(() => {
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  global.Date.now = realDateNow
  jest.clearAllMocks()
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

const runTimers = () =>
  act(() => {
    jest.runOnlyPendingTimers()
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

const mockProps = {
  defaultValue: new Date('June 3, 2019 11:00:00 PM'),
  onChange: jest.fn(),
  onValidationFail: jest.fn(),
}

test('calls onChange prop when a day is clicked', () => {
  renderWithTheme(<InputDate {...mockProps} />)
  const calendar = screen.getByText('Open calendar')
  fireEvent.click(calendar)
  runTimers()

  const date = screen.getAllByText('15')[1]
  fireEvent.click(date)
  runTimers()

  expect(mockProps.onChange).toHaveBeenCalledWith(
    new Date('June 15, 2019 11:00:00 PM')
  )
})

test('updates text input value when day is clicked', () => {
  renderWithTheme(<InputDate {...mockProps} />)
  expect(mockProps.onChange).not.toHaveBeenCalled()

  const input = screen.getByTestId('text-input') as HTMLInputElement
  expect(input).toHaveValue('06/03/2019')

  const calendar = screen.getByText('Open calendar')
  fireEvent.click(calendar)
  runTimers()

  const date = screen.getAllByText('15')[1]
  fireEvent.click(date)
  runTimers()

  expect(input).toHaveValue('06/15/2019')
})

test('fills TextInput with value, and updates when props.value changes', () => {
  renderWithTheme(<InputDate {...mockProps} />)
  const input = screen.getByTestId('text-input') as HTMLInputElement
  expect(input).toHaveValue('06/03/2019')
})

test('value can be controlled externally', () => {
  renderWithTheme(<ControlledInputDate />)

  expect(screen.getByDisplayValue('06/03/2019')).toBeInTheDocument()
  fireEvent.click(screen.getByText('June 15, 2019'))
  runTimers()

  expect(screen.getByDisplayValue('06/15/2019')).toBeInTheDocument()
  fireEvent.click(screen.getByText('January 1, 2012'))
  runTimers()

  expect(screen.getByDisplayValue('01/01/2012')).toBeInTheDocument()
})

test('user can change the selected date via text input field', () => {
  renderWithTheme(<ControlledInputDate />)

  const textInput = screen.getByDisplayValue('06/03/2019')
  expect(textInput).toBeInTheDocument()

  fireEvent.change(textInput, { target: { value: '01/01/2012' } })
  runTimers()

  fireEvent.blur(textInput)
  runTimers()

  expect(screen.getByDisplayValue('01/01/2012')).toBeInTheDocument()
})

test('user can clear the selected date by deleting text input content', () => {
  renderWithTheme(<InputDate {...mockProps} />)

  const TextInput = screen.getByDisplayValue('06/03/2019')

  fireEvent.change(TextInput, { target: { value: '' } })
  runTimers()

  fireEvent.blur(TextInput) // update value on blur
  runTimers()

  expect(mockProps.onChange).toHaveBeenCalledWith(undefined)
})

test('fills TextInput with defaultValue', () => {
  renderWithTheme(<InputDate {...mockProps} />)
  const input = screen.getByTestId('text-input') as HTMLInputElement
  expect(input).toHaveValue('06/03/2019')
})

test('validates text input to match localized date format', () => {
  renderWithTheme(<InputDate {...mockProps} />)
  const input = screen.getByTestId('text-input') as HTMLInputElement

  fireEvent.change(input, { target: { value: '6/3/2019' } })
  runTimers()
  fireEvent.blur(input)
  runTimers()

  expect(mockProps.onValidationFail).not.toHaveBeenCalled()

  fireEvent.change(input, { target: { value: 'not-a-valid-date' } })
  runTimers()

  fireEvent.blur(input)
  runTimers()

  expect(mockProps.onValidationFail).toHaveBeenCalledTimes(1)
})

test('localizes calendar', () => {
  renderWithTheme(
    <InputDate locale={ital} dateStringFormat="MMMM-dd" {...mockProps} />
  )

  const input = screen.getByTestId('text-input') as HTMLInputElement
  expect(input).toHaveValue('giugno-03')
})

describe('dateStringFormat', () => {
  test('Initial value format', () => {
    renderWithTheme(<InputDate dateStringFormat="yyyy-MM-dd" {...mockProps} />)

    expect(screen.getByDisplayValue('2019-06-03')).toBeInTheDocument()
  })

  test('After changing', () => {
    renderWithTheme(<InputDate dateStringFormat="yyyy-MM-dd" {...mockProps} />)

    const calendar = screen.getByText('Open calendar')
    fireEvent.click(calendar)
    runTimers()

    const date = screen.getAllByText('15')[1]
    fireEvent.click(date)
    runTimers()

    const input = screen.getByTestId('text-input')
    expect(input).toHaveValue('2019-06-15')
  })
})
