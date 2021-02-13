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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { TextArea } from './TextArea'

describe('TextArea', () => {
  test('with placeholder', () => {
    renderWithTheme(<TextArea placeholder="this is a placeholder" />)
    expect(
      screen.getByPlaceholderText('this is a placeholder')
    ).toBeInTheDocument()
  })

  test('should accept disabled', () => {
    renderWithTheme(<TextArea disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  test('with an error validation', () => {
    renderWithTheme(<TextArea validationType="error" />)
    expect(screen.getByRole('textbox')).toBeInvalid()
  })

  test('TextArea resizes with prop resize = true', () => {
    renderWithTheme(<TextArea resize />)
    expect(screen.getByRole('textbox')).toHaveStyle('resize: vertical')
  })

  test('TextArea resizes with prop resize = false', () => {
    renderWithTheme(<TextArea resize={false} />)
    expect(screen.getByRole('textbox')).toHaveStyle('resize: none')
  })

  test('TextArea resizes with prop resize = none', () => {
    renderWithTheme(<TextArea resize="none" />)
    expect(screen.getByRole('textbox')).toHaveStyle('resize: none')
  })

  test('TextArea resizes with prop resize = vertical', () => {
    renderWithTheme(<TextArea resize="vertical" />)
    expect(screen.getByRole('textbox')).toHaveStyle('resize: vertical')
  })
})
