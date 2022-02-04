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
import { renderWithTheme } from '@looker/components-test-utils'
import type { FilterModel } from '@looker/filter-expressions'
import { screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { SingleNumberInput } from './SingleNumberInput'

describe('SingleNumberInput component', () => {
  const props = {
    item: ({ id: 'test_id', type: '=', value: [] } as unknown) as FilterModel,
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
        item={
          ({ id: 'test_id', type: '=', value: 1 } as unknown) as FilterModel
        }
      />
    )
    // Can't use getByRole('textbox') for type="number"
    const input = screen.getByTestId('single-number')
    // type="number" is important, it prevents non-numeric input
    expect(input).toHaveAttribute('type', 'number')
    expect(input).toHaveDisplayValue('1')
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
  })
})
