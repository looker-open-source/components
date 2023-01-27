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
import { FieldSelectMulti } from './FieldSelectMulti'

const fieldSelectMultiOptions = [
  { label: 'Apples', value: '1' },
  { label: 'Bananas', value: '2' },
  { label: 'Oranges', value: '3' },
]

describe('FieldSelectMulti', () => {
  test('should accept detail and description attributes', () => {
    renderWithTheme(
      <FieldSelectMulti
        detail="5/50"
        description="this is the description"
        label="👍"
        name="thumbsUp"
        id="thumbs-up"
        options={fieldSelectMultiOptions}
      />
    )

    expect(screen.getByText('5/50')).toBeInTheDocument()
    expect(screen.getByLabelText('👍')).toHaveAccessibleDescription(
      'this is the description'
    )
  })

  test('should accept a disabled prop', () => {
    renderWithTheme(
      <FieldSelectMulti
        disabled
        id="test"
        label="Test Label"
        name="test"
        options={fieldSelectMultiOptions}
      />
    )

    const input = screen.getByLabelText('Test Label')
    expect(input).toBeDisabled()
  })

  test('should accept required attributes', () => {
    renderWithTheme(
      <FieldSelectMulti
        label="👍"
        name="thumbsUp"
        id="thumbs-up"
        options={fieldSelectMultiOptions}
        required
      />
    )
    expect(screen.getByText('required')).toBeVisible()
  })

  test('should display error message', () => {
    const errorMessage = 'This is an error'

    renderWithTheme(
      <FieldSelectMulti
        id="testFieldSelectMulti"
        label="Label"
        name="test"
        options={fieldSelectMultiOptions}
        validationMessage={{ message: errorMessage, type: 'error' }}
      />
    )

    expect(screen.getByText('This is an error')).toBeVisible()
  })

  test('Should trigger onChange handler', () => {
    const handleChange = jest.fn()

    renderWithTheme(
      <FieldSelectMulti
        label="👍"
        name="thumbsUp"
        id="thumbs-up"
        onChange={handleChange}
        options={fieldSelectMultiOptions}
      />
    )

    // The combobox container and the input share the label
    const input = screen.getByLabelText('👍')
    fireEvent.click(input)

    const apples = screen.getByText('Apples')
    fireEvent.click(apples)

    expect(handleChange).toHaveBeenCalledTimes(1)

    fireEvent.click(document)
  })
})
