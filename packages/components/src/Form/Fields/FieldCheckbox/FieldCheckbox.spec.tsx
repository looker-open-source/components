/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { FieldCheckbox } from './FieldCheckbox'

describe('FieldCheckbox', () => {
  test('required', () => {
    renderWithTheme(
      <FieldCheckbox
        id="FieldCheckboxID"
        label="I agree"
        name="thumbsUp"
        required
      />
    )

    expect(screen.getByTestId('requiredStar')).toBeVisible()
  })

  test('disabled', () => {
    renderWithTheme(
      <FieldCheckbox
        disabled
        id="FieldCheckboxID"
        label="I agree"
        name="thumbsUp"
      />
    )

    expect(screen.getByText('I agree')).toBeDisabled()
  })

  test('error message has proper aria setup', () => {
    const errorMessage = 'This is an error'

    const { container } = renderWithTheme(
      <FieldCheckbox
        id="test"
        defaultValue="example"
        validationMessage={{ message: errorMessage, type: 'error' }}
      />
    )

    const input = screen.getByDisplayValue('example')
    const id = input.getAttribute('aria-describedby')
    expect(id).toBeDefined()
    expect(id).toEqual('test-description')
    expect(container).toHaveTextContent(errorMessage)
  })

  test('Accessibility', () => {
    renderWithTheme(
      <FieldCheckbox
        description="describe something here."
        detail="4/20"
        id="id"
        label="Example Field"
      />
    )

    expect(screen.getByRole('input')).toHaveAttribute(
      'aria-describedby',
      'id-description'
    )

    expect(screen.getByText('describe something here.')).toHaveAttribute(
      'id',
      'id-description'
    )

    expect(screen.getByText('4/20')).toHaveAttribute('id', 'id-description')

    expect(screen.getByText('Example Field').closest('span')).toHaveAttribute(
      'id',
      'id-description'
    )
  })
})
