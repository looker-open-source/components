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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
import { FieldTimeSelect } from './FieldTimeSelect'

describe('FieldTimeSelect', () => {
  test('should associate label and input field', () => {
    renderWithTheme(
      <FieldTimeSelect
        label="Field Time Label"
        id="field-time-select"
        interval={10}
      />
    )
    expect(screen.getByLabelText('Field Time Label').tagName).toEqual('INPUT')
  })

  test('should accept required attributes', () => {
    renderWithTheme(
      <FieldTimeSelect
        label="Label"
        id="field-time-select"
        interval={10}
        required
      />
    )
    expect(screen.getByText('required')).toBeVisible()
  })

  test('should display error message', () => {
    const errorMessage = 'This is an error'

    renderWithTheme(
      <FieldTimeSelect
        id="field-time-select"
        interval={10}
        label="Label"
        validationMessage={{ message: errorMessage, type: 'error' }}
      />
    )

    expect(screen.getByText('This is an error')).toBeVisible()
  })

  test('should trigger onChange handler', () => {
    const onChange = jest.fn()

    renderWithTheme(
      <FieldTimeSelect
        label="Label"
        id="field-time-select"
        interval={10}
        onChange={onChange}
      />
    )

    fireEvent.click(screen.getByLabelText('Label'))
    fireEvent.change(screen.getByLabelText('Label'), {
      target: { value: '2pm' },
    })
    fireEvent.keyDown(screen.getByLabelText('Label'), { key: 'Enter' })
    expect(onChange).toHaveBeenCalledTimes(1)
    fireEvent.click(document)
  })

  test('should display error message for invalid time input', () => {
    renderWithTheme(
      <FieldTimeSelect label="Label" id="field-time-select" interval={10} />
    )

    const input = screen.getByLabelText('Label')
    fireEvent.click(input)
    fireEvent.change(input, {
      target: { value: 'invalid time' },
    })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(
      screen.getAllByText('Please use format HH:MM')[0]
    ).toBeInTheDocument()
    fireEvent.blur(input)
  })

  test('should reset any format errors on blur', () => {
    renderWithTheme(
      <FieldTimeSelect label="Label" id="field-time-select" interval={10} />
    )

    fireEvent.click(screen.getByLabelText('Label'))
    fireEvent.change(screen.getByLabelText('Label'), {
      target: { value: 'invalid time' },
    })
    fireEvent.keyDown(screen.getByLabelText('Label'), { key: 'Enter' })
    expect(
      screen.getAllByText('Please use format HH:MM')[0]
    ).toBeInTheDocument()
    fireEvent.click(document)
    fireEvent.blur(screen.getByLabelText('Label'))
    const errorMessage = screen.queryByText('Please use format HH:MM')
    expect(errorMessage).not.toBeInTheDocument()
  })
})
