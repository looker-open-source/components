/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { FieldDateRange } from './FieldDateRange'

const realDateNow = Date.now.bind(global.Date)

beforeEach(() => {
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  global.Date.now = jest.fn(() => 1580567580000)
})

afterEach(() => {
  /* eslint-disable-next-line @typescript-eslint/unbound-method */
  global.Date.now = realDateNow
  jest.clearAllMocks()
})

test('FieldDateRange renders and displays label', () => {
  renderWithTheme(
    <FieldDateRange
      defaultValue={{
        from: new Date('June 3, 2019'),
        to: new Date('June 9, 2019'),
      }}
      id="FieldDateRangeID"
      label="Test Label"
    />
  )

  expect(screen.getAllByLabelText('Test Label').length).toEqual(2)
})

test('FieldDateRange should accept a disabled prop', () => {
  renderWithTheme(
    <FieldDateRange
      defaultValue={{
        from: new Date('June 3, 2019'),
        to: new Date('June 9, 2019'),
      }}
      disabled
      id="FieldDateRangeID"
      label="Disabled Label"
    />
  )

  const input = screen.getAllByRole('textbox')
  expect(input[0]).toBeDisabled()
  expect(input[1]).toBeDisabled()
})

test('FieldDateRange should accept required attributes', () => {
  renderWithTheme(
    <FieldDateRange
      defaultValue={{
        from: new Date('June 3, 2019'),
        to: new Date('June 9, 2019'),
      }}
      id="FieldDateRangeID"
      label="Required Label"
      required
    />
  )
  expect(screen.getByText('required')).toBeVisible()
})

test('FieldDateRange should display error message', () => {
  const errorMessage = 'This is an error'

  renderWithTheme(
    <FieldDateRange
      defaultValue={{
        from: new Date('June 3, 2019'),
        to: new Date('June 9, 2019'),
      }}
      id="FieldDateRangeID"
      label="Validation Label"
      validationMessage={{ message: errorMessage, type: 'error' }}
    />
  )

  expect(screen.getByText('This is an error')).toBeVisible()
})
