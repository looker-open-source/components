/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { renderWithTheme } from '@looker/components-test-utils'
import type { FilterModel } from '@looker/filter-expressions'
import { screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { SingleNumberInput } from './SingleNumberInput'

describe('SingleNumberInput component', () => {
  const props = {
    item: { id: 'test_id', type: '=', value: [] } as unknown as FilterModel,
    onChange: jest.fn(),
  }
  beforeEach(() => {
    props.onChange.mockClear()
  })

  it('defaults to empty string', () => {
    renderWithTheme(<SingleNumberInput {...props} />)
    // Can't use getByRole('textbox') for type="number"
    const input = screen.getByTestId('single-number')
    // type="number" is important, it prevents non-numeric input
    expect(input).toHaveAttribute('type', 'number')
    expect(input).toHaveDisplayValue('')
  })

  it('shows the current itemValue', () => {
    renderWithTheme(
      <SingleNumberInput
        {...props}
        item={{ id: 'test_id', type: '=', value: 1 } as unknown as FilterModel}
      />
    )
    // Can't use getByRole('textbox') for type="number"
    const input = screen.getByTestId('single-number')
    // type="number" is important, it prevents non-numeric input
    expect(input).toHaveAttribute('type', 'number')
    expect(input).toHaveDisplayValue('1')
  })

  it('shows the current itemValue if it is zero (0)', () => {
    // bug fix for b/265746708
    renderWithTheme(
      <SingleNumberInput
        {...props}
        item={{ id: 'test_id', type: '=', value: 0 } as unknown as FilterModel}
      />
    )
    const input = screen.getByTestId('single-number')
    expect(input).toHaveDisplayValue('0')
  })

  describe('calls onChange handler', () => {
    it('calls onChange handler for number value', () => {
      renderWithTheme(<SingleNumberInput {...props} />)
      const input = screen.getByTestId('single-number')
      fireEvent.change(input, { target: { value: '2' } })
      expect(props.onChange).toHaveBeenCalledWith('test_id', { value: [2] })
    })

    it('Does not call onChange handler for not numeric value', () => {
      renderWithTheme(<SingleNumberInput {...props} />)
      fireEvent.change(screen.getByTestId('single-number'), {
        target: { value: 'not numeric value' },
      })
      expect(props.onChange).not.toHaveBeenCalled()
    })

    it('calls onChange handler for big integer', () => {
      renderWithTheme(<SingleNumberInput {...props} />)
      const input = screen.getByTestId('single-number')
      fireEvent.change(input, { target: { value: '12345678901234567890' } })
      expect(props.onChange.mock.calls).toMatchInlineSnapshot(`
        Array [
          Array [
            "test_id",
            Object {
              "value": Array [
                12345678901234567890n,
              ],
            },
          ],
        ]
      `)
    })
  })
})
