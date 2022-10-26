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
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import ital from 'date-fns/locale/it'
import { InputDate } from './InputDate'

afterEach(() => {
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

const mockProps = {
  defaultValue: new Date('June 3, 2019 11:00:00 PM'),
  onChange: jest.fn(),
  onValidationFail: jest.fn(),
}

test('calls onChange prop when a day is clicked', () => {
  renderWithTheme(<InputDate {...mockProps} />)
  fireEvent.click(screen.getByText('Open calendar'))
  fireEvent.click(screen.getByTitle('Sat Jun 15, 2019'))
  expect(mockProps.onChange).toHaveBeenCalledWith(
    new Date('June 15, 2019 11:00:00 PM')
  )
})

test('fills TextInput with value', () => {
  renderWithTheme(<InputDate {...mockProps} />)
  expect(screen.getByDisplayValue('06/03/2019')).toBeInTheDocument()
})

test('updates text input value when day is clicked', () => {
  renderWithTheme(<InputDate {...mockProps} />)
  expect(mockProps.onChange).not.toHaveBeenCalled()
  expect(screen.getByDisplayValue('06/03/2019')).toBeInTheDocument()

  fireEvent.click(screen.getByText('Open calendar'))
  fireEvent.click(screen.getByTitle('Sat Jun 15, 2019'))
  expect(screen.getByDisplayValue('06/15/2019')).toBeInTheDocument()
})

test('value can be controlled externally', () => {
  renderWithTheme(<ControlledInputDate />)
  expect(screen.getByDisplayValue('06/03/2019')).toBeInTheDocument()

  fireEvent.click(screen.getByText('June 15, 2019'))
  expect(screen.getByDisplayValue('06/15/2019')).toBeInTheDocument()

  fireEvent.click(screen.getByText('January 1, 2012'))
  expect(screen.getByDisplayValue('01/01/2012')).toBeInTheDocument()
})

test('user can change the selected date via text input field', () => {
  renderWithTheme(<ControlledInputDate />)
  const input = screen.getByDisplayValue('06/03/2019')
  fireEvent.change(input, { target: { value: '01/01/2012' } })
  fireEvent.blur(input)
  expect(screen.getByDisplayValue('01/01/2012')).toBeInTheDocument()
})

test('user can clear the selected date by deleting text input content', () => {
  renderWithTheme(<InputDate {...mockProps} />)
  const input = screen.getByDisplayValue('06/03/2019')
  fireEvent.change(input, { target: { value: '' } })
  fireEvent.blur(input)
  expect(mockProps.onChange).toHaveBeenCalledWith(undefined)
})

test('validates text input to match localized date format', () => {
  renderWithTheme(<InputDate {...mockProps} />)
  const input = screen.getByDisplayValue('06/03/2019')

  fireEvent.change(input, { target: { value: '6/3/2019' } })
  fireEvent.blur(input)
  expect(mockProps.onValidationFail).not.toHaveBeenCalled()

  fireEvent.change(input, { target: { value: 'not-a-valid-date' } })
  fireEvent.blur(input)
  expect(mockProps.onValidationFail).toHaveBeenCalledTimes(1)
})

test('localizes calendar', () => {
  renderWithTheme(
    <InputDate locale={ital} dateStringFormat="MMMM-dd" {...mockProps} />
  )
  expect(screen.getByDisplayValue('giugno-03')).toBeInTheDocument()
})

test('Initial dateStringValue', () => {
  renderWithTheme(<InputDate dateStringFormat="yyyy-MM-dd" {...mockProps} />)
  expect(screen.getByDisplayValue('2019-06-03')).toBeInTheDocument()
})

test('Changing value with dateStringFormat', () => {
  renderWithTheme(<InputDate dateStringFormat="yyyy-MM-dd" {...mockProps} />)
  fireEvent.click(screen.getByText('Open calendar'))
  fireEvent.click(screen.getByTitle('Sat Jun 15, 2019'))
  expect(screen.getByDisplayValue('2019-06-15')).toBeInTheDocument()
})
