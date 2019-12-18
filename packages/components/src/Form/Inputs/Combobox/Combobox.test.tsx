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

import { renderWithTheme } from '@looker/components-test-utils'
import { act, cleanup, fireEvent } from '@testing-library/react'
import React from 'react'

import { Combobox, ComboboxInput, ComboboxList, ComboboxOption } from '.'

afterEach(cleanup)

describe('<Combobox/> with children', () => {
  test('Renders children, merges callbacks', () => {
    const handleChange = jest.fn()
    const handleClick = jest.fn()
    const { getByText, getByTestId, queryByText } = renderWithTheme(
      <Combobox onChange={handleChange}>
        <ComboboxInput data-testid="select-input" />
        <ComboboxList>
          <ComboboxOption label="Foo" value="101" onClick={handleClick} />
          <ComboboxOption label="Bar" value="102" />
        </ComboboxList>
      </Combobox>
    )

    const input = getByTestId('select-input')
    fireEvent.click(input)

    expect(queryByText('Apples')).not.toBeInTheDocument()
    const foo = getByText('Foo')
    expect(getByText('Foo')).toBeInTheDocument()
    expect(getByText('Bar')).toBeInTheDocument()

    fireEvent.click(foo)

    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith({ data: 101, value: 'Foo' })
  })
})
