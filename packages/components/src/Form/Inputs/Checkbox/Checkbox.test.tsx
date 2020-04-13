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
import { assertSnapshot, renderWithTheme } from '@looker/components-test-utils'
import { fireEvent } from '@testing-library/react'
import { Checkbox, CheckboxProps } from './Checkbox'

afterEach(() => {
  jest.resetAllMocks()
})

test('Accepts defaultChecked prop, and toggles value without change handler', () => {
  const { getByRole } = renderWithTheme(<Checkbox defaultChecked />)
  const checkboxInput = getByRole('checkbox')

  expect((checkboxInput as HTMLInputElement).checked).toEqual(true)

  fireEvent.click(checkboxInput)

  // toggled state:
  expect((checkboxInput as HTMLInputElement).checked).toEqual(false)
})

test('Accepts checked prop, and is read only without a change handler', () => {
  const { getByRole } = renderWithTheme(<Checkbox checked />)
  const checkboxInput = getByRole('checkbox')

  expect((checkboxInput as HTMLInputElement).checked).toEqual(true)

  fireEvent.click(checkboxInput)

  // unchanged state:
  expect((checkboxInput as HTMLInputElement).checked).toEqual(true)
})

test('Triggers onChange handler', () => {
  const mockProps: CheckboxProps = {
    onChange: jest.fn(),
  }

  const { getByRole } = renderWithTheme(<Checkbox {...mockProps} />)

  const checkboxInput = getByRole('checkbox')

  expect(mockProps.onChange).not.toHaveBeenCalled()
  expect((checkboxInput as HTMLInputElement).checked).toEqual(false)

  fireEvent.click(checkboxInput)

  expect(mockProps.onChange).toHaveBeenCalledTimes(1)
  expect((checkboxInput as HTMLInputElement).checked).toEqual(true)
})

test('Checkbox checked set to mixed', () => {
  assertSnapshot(<Checkbox checked="mixed" />)
})

test('Checkbox with name and id', () => {
  assertSnapshot(<Checkbox name="Chuck" id="Chucky" />)
})

test('Checkbox should accept disabled', () => {
  assertSnapshot(<Checkbox disabled />)
})

test('Checkbox with aria-describedby', () => {
  assertSnapshot(<Checkbox aria-describedby="some-id" />)
})
