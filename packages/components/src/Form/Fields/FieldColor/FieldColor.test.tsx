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
} from 'looker-components-test-utils'
import { theme } from 'looker-design-tokens'
import { ThemeProvider } from 'styled-components'

import { FieldColor } from './FieldColor'

test('Default FieldColor', () => {
  assertSnapshotShallow(<FieldColor />)
})

test('FieldColor with hidden input', () => {
  const { queryByRole } = renderWithTheme(
    <FieldColor value="yellow" hideInput />
  )
  expect(queryByRole('input')).not.toBeInTheDocument()
})

test('FieldColor starts with a named color value', () => {
  const { getByDisplayValue } = renderWithTheme(<FieldColor value="green" />)
  expect(getByDisplayValue('green')).toBeInTheDocument()
})

test('FieldColor starts with a named color value', () => {
  const { getByDisplayValue } = renderWithTheme(<FieldColor value="green" />)
  fireEvent.change(getByDisplayValue('green'), { target: { value: 'blue' } })
  expect(getByDisplayValue('blue')).toBeInTheDocument()
})

const FieldColorValidationMessage = () => {
  return (
    <ThemeProvider theme={theme}>
      <FieldColor validationMessage={{ message: 'Error!', type: 'error' }} />
    </ThemeProvider>
  )
}

test('FieldColor with a validation message', () => {
  const { queryByText } = renderWithTheme(<FieldColorValidationMessage />)
  expect(queryByText('Error!')).toBeInTheDocument()
})
