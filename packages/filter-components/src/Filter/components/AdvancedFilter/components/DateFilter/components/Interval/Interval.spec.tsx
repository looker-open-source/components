/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
      ]
    `)
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
        "fiscal quarters",
        "fiscal years",
      ]
    `)
    closeCombobox()
  })
})
