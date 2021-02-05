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
import { renderWithTheme } from '@looker/components-test-utils'
import { screen, fireEvent } from '@testing-library/react'
import { Radio } from './Radio'

describe('Radio', () => {
  test('renders properly', () => {
    renderWithTheme(<Radio defaultChecked />)
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  test('accepts defaultChecked prop', () => {
    renderWithTheme(<Radio defaultChecked />)
    expect(screen.getByRole('radio')).toBeChecked()
  })

  test('should accept disabled prop', () => {
    renderWithTheme(<Radio disabled />)
    expect(screen.getByRole('radio')).toBeDisabled()
  })

  test('should accept disabled and checked props together', () => {
    renderWithTheme(<Radio disabled checked />)
    expect(screen.getByRole('radio')).toBeDisabled()
    expect(screen.getByRole('radio')).toBeChecked()
  })

  test('has aria-describedby attribute', () => {
    renderWithTheme(<Radio aria-describedby="some-id" id="RadioID" />)
    expect(screen.getByRole('radio')).toHaveAttribute(
      'aria-describedby',
      'some-id'
    )
  })

  test('renders with error', () => {
    renderWithTheme(<Radio validationType="error" />)
    expect(screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'true')
  })

  test('renders checked with error', () => {
    renderWithTheme(<Radio defaultChecked validationType="error" />)
    expect(screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'true')
  })

  test('should trigger onChange handler', () => {
    const onChange = jest.fn()
    renderWithTheme(<Radio id="radioID" onChange={onChange} />)
    fireEvent.click(screen.getByRole('radio'))
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
