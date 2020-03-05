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

import { InputDate } from './InputDate'

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
  expect(input.value).toEqual('')

  const date = getByText('15') // the 15th day of the month
  fireEvent.click(date)

  expect(input.value).toEqual('03/15/2020')
})

test('fills TextInput with defaultValue', () => {
  const mockProps = {
    defaultValue: new Date('June 3, 2019'),
    onChange: jest.fn(),
  }
  const { getByTestId } = renderWithTheme(<InputDate {...mockProps} />)
  const input = getByTestId('text-input') as HTMLInputElement
  expect(input.value).toEqual('06/03/2019')
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
