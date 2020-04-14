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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent } from '@testing-library/react'
import { ActionListCheckbox } from './ActionListCheckbox'

describe('ActionListCheckbox', () => {
  test('Renders checked', () => {
    const { getByRole } = renderWithTheme(<ActionListCheckbox checked />)
    const actionListCheckbox = getByRole('checkbox')
    expect((actionListCheckbox as HTMLInputElement).checked).toEqual(true)
  })

  test('Renders unchecked', () => {
    const { getByRole } = renderWithTheme(<ActionListCheckbox />)
    const actionListCheckbox = getByRole('checkbox')
    expect((actionListCheckbox as HTMLInputElement).checked).toEqual(false)
  })

  test('Renders disabled', () => {
    const { getByRole } = renderWithTheme(<ActionListCheckbox disabled />)
    const actionListCheckbox = getByRole('checkbox')
    expect((actionListCheckbox as HTMLInputElement).disabled).toEqual(true)
  })

  test('Calls onChange callback', () => {
    const onChange = jest.fn()
    const { getByRole } = renderWithTheme(
      <ActionListCheckbox onChange={onChange} />
    )
    const actionListCheckbox = getByRole('checkbox')
    fireEvent.click(actionListCheckbox)
    expect(onChange).toHaveBeenCalledTimes(1)
    fireEvent.click(actionListCheckbox)
    expect(onChange).toHaveBeenCalledTimes(2)
  })
})
