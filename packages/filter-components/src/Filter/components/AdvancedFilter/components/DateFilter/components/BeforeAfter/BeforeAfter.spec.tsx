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
import type { FilterModel } from '@looker/filter-expressions'
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
import { BeforeAfter } from './BeforeAfter'

describe('BeforeAfter Date filter test', () => {
  it('should render a BeforeAfter component', () => {
    renderWithTheme(
      <Filter
        expression={'before 3 day ago'}
        name="test"
        onChange={jest.fn()}
        field={testField}
        expressionType="date"
        config={testFilterUIConfig}
        allowMultipleValues={true}
      />
    )

    const inputs = screen.getAllByRole('textbox')
    expect(inputs[0]).toHaveValue('is before')
    expect(inputs[1]).toHaveValue('(relative)')
    expect(inputs[2]).toHaveValue('days ago')
    // input[type=number] is not captured by getAllByRole('textbox')
    expect(screen.queryByTestId('number-value')).toHaveValue(3)

    fireEvent.click(inputs[2])
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "years ago",
        "quarters ago",
        "months ago",
        "weeks ago",
        "days ago",
        "hours ago",
        "minutes ago",
        "seconds ago",
        "now",
        "seconds from now",
        "minutes from now",
        "hours from now",
        "days from now",
        "weeks from now",
        "months from now",
        "quarters from now",
        "years from now",
      ]
    `)
    closeCombobox()
  })

  it('should render a BeforeAfter component with FiscalUnit options', () => {
    renderWithTheme(
      <Filter
        expression={'before 3 days ago'}
        name="test"
        onChange={jest.fn()}
        field={{ ...testField, fiscal_month_offset: 1 }}
        expressionType="date"
        config={testFilterUIConfig}
        allowMultipleValues={true}
      />
    )

    fireEvent.click(screen.getAllByRole('textbox')[2])
    expect(getAllComboboxOptionText()).toMatchInlineSnapshot(`
      Array [
        "fiscal years ago",
        "fiscal quarters ago",
        "years ago",
        "quarters ago",
        "months ago",
        "weeks ago",
        "days ago",
        "hours ago",
        "minutes ago",
        "seconds ago",
        "now",
        "seconds from now",
        "minutes from now",
        "hours from now",
        "days from now",
        "weeks from now",
        "months from now",
        "quarters from now",
        "years from now",
        "fiscal quarter from now",
        "fiscal years from now",
      ]
    `)
    closeCombobox()
  })
})

describe('BeforeAfter can render now option', () => {
  const beforeNowItem: FilterModel = {
    id: '0',
    type: 'before',
    is: true,
    unit: 'now',
    range: 'relative',
  }

  it('should render a Before now time unit', () => {
    renderWithTheme(
      <BeforeAfter
        item={beforeNowItem}
        onChange={jest.fn()}
        field={{ ...testField, fiscal_month_offset: 1 }}
        filterType="date"
      />
    )
    expect(screen.getAllByRole('textbox')[1]).toHaveValue('now')
  })

  it('should not render value component for before now item', () => {
    renderWithTheme(
      <BeforeAfter
        item={beforeNowItem}
        onChange={jest.fn()}
        field={{ ...testField, fiscal_month_offset: 1 }}
        filterType="date"
      />
    )
    expect(screen.queryByTestId('number-value')).not.toBeInTheDocument()
  })
})
