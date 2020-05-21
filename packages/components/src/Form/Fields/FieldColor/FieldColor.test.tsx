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
import { fireEvent } from '@testing-library/react'
import {
  assertSnapshotShallow,
  renderWithTheme,
} from '@looker/components-test-utils'

import { Button } from '../../../Button'
import { FieldColor } from './FieldColor'

describe('FieldColor', () => {
  test('Default render with label', () => {
    assertSnapshotShallow(<FieldColor label="FieldColor" />)
  })
  const FieldColorValidationMessage = () => {
    return (
      <FieldColor validationMessage={{ message: 'Error!', type: 'error' }} />
    )
  }

  test('with a validation message', () => {
    const { queryByText } = renderWithTheme(<FieldColorValidationMessage />)
    expect(queryByText('Error!')).toBeInTheDocument()
  })

  test('A FieldColor with description has proper aria setup', () => {
    const description = 'This is a description'

    const { container, getByDisplayValue } = renderWithTheme(
      <FieldColor id="test" defaultValue="example" description={description} />
    )

    const input = getByDisplayValue('example')
    const id = input.getAttribute('aria-describedby')
    expect(id).toBeDefined()

    const describedBy = container.querySelector(`#${id}`)
    expect(describedBy).toHaveTextContent(description)
  })

  test('A FieldColor with error has proper aria setup', () => {
    const errorMessage = 'This is an error'

    const { container, getByDisplayValue } = renderWithTheme(
      <FieldColor
        id="test"
        defaultValue="example"
        validationMessage={{ message: errorMessage, type: 'error' }}
      />
    )

    const input = getByDisplayValue('example')
    const id = input.getAttribute('aria-describedby')
    expect(id).toBeDefined()

    const describedBy = container.querySelector(`#${id}`)
    expect(describedBy).toHaveTextContent(errorMessage)
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
      const [value, setValue] = useState('')
      function handleClick() {
        setValue('yellow')
      }
      function handleChange(e: FormEvent<HTMLInputElement>) {
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
