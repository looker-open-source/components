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
import {
  closeCombobox,
  getAllComboboxOptionText,
  renderWithTheme,
} from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { dateUnits } from '../../../../../../constants/date/date_units'
import { fiscalIntervalUnits } from '../../../../../../constants/date/interval_units'
import { Filter } from '../../../../../../Filter'
import {
  testField,
  testFilterUIConfig,
} from '../../../../../../utils/filter_test_utils'

describe('Interval Date filter test', () => {
  it('should render an Interval component', () => {
    renderWithTheme(
      <Filter
        expression={'3 days ago for 6 hours'}
        name="test"
        onChange={jest.fn()}
        field={testField}
        expressionType="date"
        config={testFilterUIConfig}
      />
    )

    fireEvent.click(screen.getAllByRole('textbox')[1])
    expect(getAllComboboxOptionText()).toEqual(
      dateUnits.map((option) => option.label)
    )
    closeCombobox()
  })

  it('should render an Interval component with Fiscal unit options', () => {
    renderWithTheme(
      <Filter
        expression={'3 days ago for 6 hours'}
        name="test"
        onChange={jest.fn()}
        field={{ ...testField, fiscal_month_offset: 1 }}
        expressionType="date"
        config={testFilterUIConfig}
      />
    )

    fireEvent.click(screen.getAllByRole('textbox')[1])
    expect(getAllComboboxOptionText()).toEqual(
      fiscalIntervalUnits.map((option) => option.label)
    )
    closeCombobox()
  })
})
