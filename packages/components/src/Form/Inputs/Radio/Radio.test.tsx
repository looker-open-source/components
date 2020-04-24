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
import { assertSnapshot, renderWithTheme } from '@looker/components-test-utils'
import { fireEvent } from '@testing-library/react'
import { Radio } from './Radio'

test('Radio default', () => {
  assertSnapshot(<Radio id="radioID" />)
})

test('Radio checked set to true', () => {
  assertSnapshot(<Radio checked={true} id="radioID" />)
})

test('Radio checked set to false', () => {
  assertSnapshot(<Radio checked={false} id="radioID" />)
})

test('Radio with name and id', () => {
  assertSnapshot(<Radio id="Chuck" name="Chuck" />)
})

test('Radio should accept disabled', () => {
  assertSnapshot(<Radio disabled id="radioID" />)
})

test('Radio with aria-describedby', () => {
  assertSnapshot(<Radio aria-describedby="some-id" id="radioID" />)
})

test('Radio should trigger onChange handler', () => {
  const onChange = jest.fn()
  const { getByRole } = renderWithTheme(
    <Radio id="radioID" onChange={onChange} />
  )

  const radioInput = getByRole('radio')
  fireEvent.click(radioInput)
  expect(onChange).toHaveBeenCalledTimes(1)
})

test("Radio readOnly doesn't register onChange events", () => {
  const onChange = jest.fn()
  const { getByRole } = renderWithTheme(
    <Radio readOnly id="checkboxID" onChange={onChange} />
  )

  const checkboxInput = getByRole('radio')
  fireEvent.click(checkboxInput)
  expect(onChange).toHaveBeenCalledTimes(0)
})

test('Radio should not send onChange on second click', () => {
  const onChange = jest.fn()

  const { getByRole } = renderWithTheme(
    <Radio id="checkboxID" onChange={onChange} />
  )

  const checkboxInput = getByRole('radio')
  fireEvent.click(checkboxInput)
  fireEvent.click(checkboxInput)
  expect(onChange).toHaveBeenCalledTimes(1)
})
