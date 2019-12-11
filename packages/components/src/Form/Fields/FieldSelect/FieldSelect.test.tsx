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

import { fireEvent } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '@looker/components-test-utils'

// import { Label } from '../../Label/Label'
import { FieldSelect } from './FieldSelect'

describe('<FieldSelect/>', () => {
  test('value', () => {
    const { getAllByLabelText } = renderWithTheme(
      <FieldSelect
        label="Thumbs Up"
        name="thumbsUp"
        id="thumbs-up"
        value="Foo bar"
        options={[{ data: 'foobar', value: 'Foo bar' }]}
      />
    )

    const input = getAllByLabelText('Thumbs Up')[1]
    expect(input).toHaveValue('Foo bar')
  })

  test('input onChange handler', () => {
    const handleChange = jest.fn()

    const { getByLabelText } = renderWithTheme(
      <FieldSelect
        label="Thumbs Up"
        name="thumbsUp"
        id="thumbs-up"
        value="foobar"
        required
        inputProps={{ onChange: handleChange }}
      />
    )

    const input = getByLabelText('Thumbs Up')
    fireEvent.change(input, { target: { value: '' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  test('required', () => {
    const { getByLabelText } = renderWithTheme(
      <FieldSelect label="Thumbs Up" name="thumbsUp" id="thumbs-up" required />
    )
    const input = getByLabelText('Thumbs Up')
    expect(input).toHaveAttribute('required')
  })
})
