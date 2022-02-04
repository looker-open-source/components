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
    expect(screen.getByLabelText('I agree')).toBeDisabled()
  })

  test('Accessibility', () => {
    const errorMessage = 'This is an error'
    renderWithTheme(
      <FieldCheckbox
        description="describe something here."
        detail="4/20"
        id="test"
        label="Example Field"
        validationMessage={{ message: errorMessage, type: 'error' }}
      />
    )
    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'aria-describedby',
      'describedby-test'
    )

    const description = screen.getByText('describe something here.')
    const ariaDescribed = description.parentElement

    expect(ariaDescribed).toHaveAttribute('id', 'describedby-test')
    expect(ariaDescribed).toHaveTextContent(errorMessage)
  })
})
