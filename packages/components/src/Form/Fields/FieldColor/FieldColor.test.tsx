/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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
import React from 'react'
import { fireEvent } from '@testing-library/react'
import {
  assertSnapshotShallow,
  renderWithTheme,
} from '@looker/components-test-utils'
import { theme } from '@looker/design-tokens'
import { ThemeProvider } from 'styled-components'

import { Button } from '../../../Button'
import { FieldColor } from './FieldColor'

describe('FieldColor', () => {
  test('Default render', () => {
    assertSnapshotShallow(<FieldColor />)
  })

  test('with hidden input', () => {
    const { queryByDisplayValue } = renderWithTheme(
      <FieldColor value="yellow" hideInput />
    )
    expect(queryByDisplayValue('yellow')).not.toBeInTheDocument()
  })

  test('starts with a named color value', () => {
    const { getByDisplayValue } = renderWithTheme(<FieldColor value="green" />)
    expect(getByDisplayValue('green')).toBeInTheDocument()
  })

  test('responds to input value change', () => {
    const { getByDisplayValue } = renderWithTheme(<FieldColor value="green" />)
    const input = getByDisplayValue('green')
    input.focus()
    fireEvent.change(input, { target: { value: 'blue' } })
    expect(getByDisplayValue('blue')).toBeInTheDocument()
  })

  const FieldColorValidationMessage = () => {
    return (
      <ThemeProvider theme={theme}>
        <FieldColor validationMessage={{ message: 'Error!', type: 'error' }} />
      </ThemeProvider>
    )
  }

  test('with a validation message', () => {
    const { queryByText } = renderWithTheme(<FieldColorValidationMessage />)
    expect(queryByText('Error!')).toBeInTheDocument()
  })

  test('with an onChange', () => {
    const onChangeMock = jest.fn()
    const { getByLabelText } = renderWithTheme(
      <FieldColor onChange={onChangeMock} label="Background Color" />
    )
    const input = getByLabelText('Background Color')
    fireEvent.change(input, { target: { value: '#FFFF00' } })
    expect(onChangeMock).toHaveBeenCalledWith({
      currentTarget: { value: '#FFFF00' },
      target: { value: '#FFFF00' },
    })
  })

  test('with a defaultValue', () => {
    const { getByLabelText } = renderWithTheme(
      <FieldColor defaultValue="purple" label="Background Color" />
    )
    const input = getByLabelText('Background Color')
    expect(input).toHaveValue('purple')
  })

  test('with controlled state', () => {
    function Wrapper() {
      const [value, setValue] = React.useState('')
      function handleClick() {
        setValue('yellow')
      }
      function handleChange(e: React.FormEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value)
      }
      return (
        <>
          <Button onClick={handleClick}>Turn yellow</Button>
          <FieldColor
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
})
