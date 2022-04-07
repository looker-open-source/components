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
import {
  closeCombobox,
  getAllComboboxOptionText,
  renderWithTheme,
} from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { Filter } from '../../../../../../Filter'
import {
  testField,
  testFilterUIConfig,
} from '../../../../../../utils/filter_test_utils'

describe('Past Date filter test', () => {
  it('should render a Past component', () => {
    renderWithTheme(
      <Filter
        expression={'3 days'}
        name="test"
        onChange={jest.fn()}
        field={testField}
        expressionType="date"
        config={testFilterUIConfig}
        allowMultipleValues={true}
      />
    )

    fireEvent.click(screen.getAllByRole('textbox')[1])
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "seconds",
        "minutes",
        "hours",
        "days",
        "weeks",
        "months",
        "quarters",
        "years",
        "complete seconds",
        "complete minutes",
        "complete hours",
        "complete days",
        "complete weeks",
        "complete months",
        "complete quarters",
        "complete years",
      ]
    `)
    closeCombobox()
  })

  it('should render a Past component with Fiscal unit options', () => {
    renderWithTheme(
      <Filter
        expression={'3 days'}
        name="test"
        onChange={jest.fn()}
        field={{ ...testField, fiscal_month_offset: 1 }}
        expressionType="date"
        config={testFilterUIConfig}
      />
    )

    fireEvent.click(screen.getAllByRole('textbox')[1])
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "seconds",
        "minutes",
        "hours",
        "days",
        "weeks",
        "months",
        "quarters",
        "years",
        "fiscal quarters",
        "fiscal years",
        "complete seconds",
        "complete minutes",
        "complete hours",
        "complete days",
        "complete weeks",
        "complete months",
        "complete quarters",
        "complete years",
        "complete fiscal quarters",
        "complete fiscal years",
      ]
    `)
    closeCombobox()
  })
})
