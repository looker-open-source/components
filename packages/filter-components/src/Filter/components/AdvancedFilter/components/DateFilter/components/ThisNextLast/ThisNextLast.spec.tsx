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

describe('This Date filter test', () => {
  const expression = 'this year'
  it('filter is set to this date filter type', () => {
    renderWithTheme(
      <Filter
        expression={expression}
        name="test"
        onChange={jest.fn()}
        field={testField}
        expressionType="date"
        config={testFilterUIConfig}
        allowMultipleValues={true}
      />
    )
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('is this')
  })

  it('should render a ThisNextLast component', () => {
    renderWithTheme(
      <Filter
        expression={expression}
        name="test"
        onChange={jest.fn()}
        field={testField}
        expressionType="date"
        config={testFilterUIConfig}
        allowMultipleValues={true}
      />
    )

    const unitsDropdown = screen.getAllByRole('textbox')[1]
    expect(unitsDropdown).toHaveValue('year')

    fireEvent.click(unitsDropdown)
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "day",
        "week",
        "month",
        "quarter",
        "year",
      ]
    `)
    closeCombobox()
  })
})

describe('Last Date filter test', () => {
  it('filter is set to last date filter type', () => {
    renderWithTheme(
      <Filter
        expression={'last fiscal year'}
        name="test"
        onChange={jest.fn()}
        field={{ ...testField, type: 'date_fiscal_quarter' }}
        expressionType="date"
        config={testFilterUIConfig}
        allowMultipleValues={true}
      />
    )
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('is previous')
  })

  it('should render a ThisNextLast Last component with Fiscal unit options', () => {
    renderWithTheme(
      <Filter
        expression={'last fiscal year'}
        name="test"
        onChange={jest.fn()}
        field={{ ...testField, type: 'date_fiscal_quarter' }}
        expressionType="date"
        config={testFilterUIConfig}
        allowMultipleValues={true}
      />
    )

    const unitsDropdown = screen.getAllByRole('textbox')[1]
    expect(unitsDropdown).toHaveValue('fiscal year')

    fireEvent.click(unitsDropdown)
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "second",
        "minute",
        "hour",
        "day",
        "week",
        "month",
        "quarter",
        "year",
        "fiscal quarter",
        "fiscal year",
      ]
    `)
    closeCombobox()
  })
})

describe('Next Date filter test', () => {
  it('filter is set to next date filter type', () => {
    renderWithTheme(
      <Filter
        expression={'next week'}
        name="test"
        onChange={jest.fn()}
        field={{ ...testField, type: 'date_fiscal_quarter' }}
        expressionType="date"
        config={testFilterUIConfig}
        allowMultipleValues={true}
      />
    )
    expect(screen.getAllByRole('textbox')[0]).toHaveValue('is next')
  })

  it('should render a ThisNextLast Next component with Fiscal unit options', () => {
    renderWithTheme(
      <Filter
        expression={'next week'}
        name="test"
        onChange={jest.fn()}
        field={{ ...testField, type: 'date_fiscal_quarter' }}
        expressionType="date"
        config={testFilterUIConfig}
        allowMultipleValues={true}
      />
    )

    const unitsDropdown = screen.getAllByRole('textbox')[1]
    expect(unitsDropdown).toHaveValue('week')

    fireEvent.click(unitsDropdown)
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "day",
        "week",
        "month",
        "quarter",
        "year",
        "fiscal quarter",
        "fiscal year",
      ]
    `)
    closeCombobox()
  })
})
