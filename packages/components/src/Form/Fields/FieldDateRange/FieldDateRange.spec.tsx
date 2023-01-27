/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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

const mockProps = {
  id: 'FieldDateRangeID',
  onChange: jest.fn(),
  onValidationFail: jest.fn(),
  value: {
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019'),
  },
}

describe('FieldDateRange ', () => {
  test('renders and displays label', () => {
    renderWithTheme(<FieldDateRange {...mockProps} label="Test Label" />)

    expect(screen.getAllByLabelText('Test Label').length).toEqual(2)
  })

  test('should accept a disabled prop', () => {
    renderWithTheme(
      <FieldDateRange {...mockProps} disabled label="Disabled Label" />
    )

    const input = screen.getAllByRole('textbox')
    expect(input[0]).toBeDisabled()
    expect(input[1]).toBeDisabled()
  })

  test('should accept required attributes', () => {
    renderWithTheme(
      <FieldDateRange {...mockProps} label="Required Label" required />
    )
    expect(screen.getByText('required')).toBeVisible()
  })

  test('should display error message', () => {
    const errorMessage = 'This is an error'

    renderWithTheme(
      <FieldDateRange
        {...mockProps}
        label="Validation Label"
        validationMessage={{ message: errorMessage, type: 'error' }}
      />
    )

    expect(screen.getByText('This is an error')).toBeVisible()
  })
})
