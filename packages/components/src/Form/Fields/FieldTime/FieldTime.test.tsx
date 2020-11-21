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
import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@looker/components-test-utils'
import { FieldTime } from './FieldTime'

test('FieldTime renders and displays label', () => {
  renderWithTheme(
    <FieldTime defaultValue="14:34" id="FieldTimeID" label="Test Label" />
  )

  expect(screen.getByText('Test Label')).toBeInTheDocument()
})

test('FieldTime should accept detail and description attributes', () => {
  renderWithTheme(
    <FieldTime
      defaultValue="14:34"
      description="this is the description"
      detail="5/50"
      id="FieldTimeID"
      label="Label"
    />
  )

  expect(screen.getByText('5/50')).toBeInTheDocument()
  expect(screen.getAllByLabelText('Label')[0]).toHaveDescription(
    'this is the description'
  )
})

test('FieldTime should accept a disabled prop', () => {
  renderWithTheme(
    <FieldTime
      defaultValue="14:34"
      disabled
      id="FieldTimeID"
      label="Disabled Label"
    />
  )

  expect(screen.getAllByLabelText('Disabled Label')[0]).toHaveAttribute(
    'aria-disabled',
    'true'
  )
})

test('FieldTime should accept required attributes', () => {
  renderWithTheme(
    <FieldTime
      defaultValue="14:34"
      id="FieldTimeID"
      label="Required Label"
      required
    />
  )
  expect(screen.getByText('required')).toBeVisible()
})

test('FieldTime should display error message', () => {
  const errorMessage = 'This is an error'

  renderWithTheme(
    <FieldTime
      defaultValue="14:34"
      id="FieldTimeID"
      label="Validation Label"
      validationMessage={{ message: errorMessage, type: 'error' }}
    />
  )

  expect(screen.getByText(errorMessage)).toBeVisible()
})
