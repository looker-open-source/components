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
import { FieldRadio } from './FieldRadio'

describe('FieldRadio', () => {
  test('FieldRadio renders with label', () => {
    renderWithTheme(<FieldRadio id="FieldRadioID" label="FM" name="thumbsUp" />)

    expect(screen.getByLabelText('FM')).toBeInTheDocument()
  })

  test('FieldRadio renders description and detail props', () => {
    const { getByText } = renderWithTheme(
      <FieldRadio
        description="describe something here."
        detail="0/50"
        id="FieldRadioID"
        label="FM"
        name="thumbsUp"
      />
    )
    expect(getByText('describe something here.')).toBeInTheDocument()
    expect(getByText('0/50')).toBeInTheDocument()
  })

  test('FieldRadio renders disabled', () => {
    const { getByRole } = renderWithTheme(
      <FieldRadio disabled id="FieldRadioID" label="FM" name="thumbsUp" />
    )
    const RadioInput = getByRole('radio')

    expect(RadioInput as HTMLInputElement).toBeDisabled()
  })

  test('FieldRadio renders with error message', () => {
    const errorMessage = 'This is an error'

    const { getByText } = renderWithTheme(
      <FieldRadio
        id="FieldRadioID"
        label="FM"
        name="thumbsUp"
        validationMessage={{ message: errorMessage, type: 'error' }}
      />
    )

    expect(getByText('This is an error')).toBeInTheDocument()
  })
})
