/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
import '@testing-library/jest-dom/extend-expect'
import React, { FormEvent, useState } from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'

import { InputColor } from './InputColor'

describe('InputColor', () => {
  test('with hidden input', () => {
    const { queryByDisplayValue } = renderWithTheme(
      <InputColor value="yellow" hideInput />
    )
    expect(queryByDisplayValue('yellow')).not.toBeInTheDocument()
  })

  test('starts with a named color value', () => {
    const { getByDisplayValue } = renderWithTheme(<InputColor value="green" />)
    expect(getByDisplayValue('green')).toBeInTheDocument()
  })

  test('responds to input value change', () => {
    const { getByDisplayValue } = renderWithTheme(<InputColor value="green" />)
    const input = getByDisplayValue('green')
    input.focus()
    fireEvent.change(input, { target: { value: 'blue' } })
    expect(getByDisplayValue('blue')).toBeInTheDocument()
  })

  test('with controlled state', () => {
    function Wrapper() {
      const [value, setValue] = useState('')
      function handleClick() {
        setValue('yellow')
      }
      function handleChange(e: FormEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value)
      }
      return (
        <>
          <button onClick={handleClick}>Turn yellow</button>
          <InputColor
            value={value}
            onChange={handleChange}
            placeholder="Select a color"
          />
        </>
      )
    }
    const { getByText, getByPlaceholderText } = renderWithTheme(<Wrapper />)

    const button = getByText('Turn yellow')
    const input = getByPlaceholderText('Select a color')
    expect(input).toHaveValue('')
    fireEvent.click(button)
    expect(input).toHaveValue('yellow')
    fireEvent.change(input, { target: { value: 'purple' } })
    expect(input).toHaveValue('purple')
  })

  test('opens on swatch click', () => {
    renderWithTheme(<InputColor value="green" />)
    fireEvent.click(screen.getByTestId('swatch'))
    expect(screen.getByTestId('color-wheel')).toBeInTheDocument()
    fireEvent.click(document)
  })

  test('disabled', () => {
    renderWithTheme(<InputColor disabled value="green" />)

    // Find input, verify it's disabled
    expect(screen.getByRole('textbox')).toBeDisabled()

    // Find swatch, verify clicking doesn't open Popover
    fireEvent.click(screen.getByTestId('swatch'))
    expect(screen.queryByTestId('color-wheel')).not.toBeInTheDocument()
  })

  test('readOnly', () => {
    renderWithTheme(<InputColor readOnly value="green" />)

    // Find input, verify it's readOnly
    expect(screen.getByRole('textbox')).toHaveAttribute('readonly')

    // Find swatch, verify clicking doesn't open Popover
    fireEvent.click(screen.getByTestId('swatch'))
    expect(screen.queryByTestId('color-wheel')).not.toBeInTheDocument()
  })
})
