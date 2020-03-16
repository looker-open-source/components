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
import { cleanup, fireEvent } from '@testing-library/react'
import React from 'react'

import {
  ComboboxMulti,
  ComboboxMultiInput,
  ComboboxMultiList,
  ComboboxMultiOption,
} from '.'

afterEach(cleanup)

describe('<ComboboxMulti/> with values', () => {
  const handleChange = jest.fn()
  const handleClick = jest.fn()
  const renderComboboxMulti = () =>
    renderWithTheme(
      <ComboboxMulti
        onChange={handleChange}
        values={[
          { label: 'Bar', value: '102' },
          { label: 'Qux', value: '104' },
        ]}
      >
        <ComboboxMultiInput placeholder="Type here" />
        <ComboboxMultiList>
          <ComboboxMultiOption label="Foo" value="101" onClick={handleClick} />
          <ComboboxMultiOption label="Bar" value="102" onClick={handleClick} />
          <ComboboxMultiOption label="Baz" value="103" onClick={handleClick} />
          <ComboboxMultiOption label="Qux" value="104" onClick={handleClick} />
        </ComboboxMultiList>
      </ComboboxMulti>
    )

  afterEach(() => {
    handleChange.mockClear()
    handleClick.mockClear()
  })

  test('Adds new values to existing', () => {
    const {
      getByText,
      getAllByText,
      getByPlaceholderText,
    } = renderComboboxMulti()
    const input = getByPlaceholderText('Type here')
    fireEvent.mouseDown(input)

    const foo = getByText('Foo')
    expect(foo).toBeInTheDocument()
    expect(getByText('Baz')).toBeInTheDocument()
    // Current values will be a chip in the input
    expect(getAllByText('Bar')).toHaveLength(2)
    expect(getAllByText('Qux')).toHaveLength(2)
    expect(handleClick).toHaveBeenCalledTimes(0)
    expect(handleChange).toHaveBeenCalledTimes(0)

    fireEvent.click(foo)

    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith([
      { label: 'Bar', value: '102' },
      { label: 'Qux', value: '104' },
      { label: 'Foo', value: '101' },
    ])
  })

  test('Removes existing values via option click', () => {
    const { getAllByText, getByPlaceholderText } = renderComboboxMulti()
    const input = getByPlaceholderText('Type here')
    fireEvent.mouseDown(input)

    const bar = getAllByText('Bar')[0]

    fireEvent.click(bar)

    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith([{ label: 'Qux', value: '104' }])
  })

  test('Removes existing values via chip delete', () => {
    const { getAllByRole } = renderComboboxMulti()

    const removeChip = getAllByRole('button')[1]
    fireEvent.click(removeChip)
    expect(handleChange).toHaveBeenCalledWith([{ label: 'Bar', value: '102' }])
  })
})
