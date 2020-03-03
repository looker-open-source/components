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

import { renderWithTheme } from '@looker/components-test-utils'
import { cleanup, fireEvent } from '@testing-library/react'
import React from 'react'

import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxMulti,
  ComboboxMultiInput,
  ComboboxMultiList,
  ComboboxMultiOption,
} from '.'

afterEach(cleanup)

describe('<Combobox/> with children', () => {
  test('Renders children, merges callbacks', () => {
    const handleChange = jest.fn()
    const handleClick = jest.fn()
    const { getByText, getByPlaceholderText } = renderWithTheme(
      <Combobox onChange={handleChange}>
        <ComboboxInput placeholder="Type here" />
        <ComboboxList>
          <ComboboxOption label="Foo" value="101" onClick={handleClick} />
          <ComboboxOption label="Bar" value="102" />
        </ComboboxList>
      </Combobox>
    )

    const input = getByPlaceholderText('Type here')
    fireEvent.mouseDown(input)

    const foo = getByText('Foo')
    expect(getByText('Foo')).toBeInTheDocument()
    expect(getByText('Bar')).toBeInTheDocument()
    expect(handleClick).toHaveBeenCalledTimes(0)
    expect(handleChange).toHaveBeenCalledTimes(0)

    fireEvent.click(foo)

    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith({ label: 'Foo', value: '101' })
  })

  // Testing same behavior on both Combobox and ComboboxMulti
  test.each([
    [
      'Combobox',
      <Combobox key="combobox">
        <ComboboxInput placeholder="Type here" />
        <ComboboxList>
          <ComboboxOption label="Foo" value="101" />
          <ComboboxOption label="Bar" value="102" />
        </ComboboxList>
      </Combobox>,
    ],
    [
      'ComboboxMulti',
      <ComboboxMulti key="combobox-multi">
        <ComboboxMultiInput placeholder="Type here" />
        <ComboboxMultiList>
          <ComboboxMultiOption label="Foo" value="101" />
          <ComboboxMultiOption label="Bar" value="102" />
        </ComboboxMultiList>
      </ComboboxMulti>,
    ],
  ])('Opens and closes on click (%s)', (_, jsx) => {
    const { getByText, getByPlaceholderText, queryByText } = renderWithTheme(
      jsx
    )
    expect(queryByText('Foo')).not.toBeInTheDocument()

    const input = getByPlaceholderText('Type here')
    fireEvent.click(input)
    expect(getByText('Foo')).toBeInTheDocument()

    fireEvent.click(input)
    expect(queryByText('Foo')).not.toBeInTheDocument()
  })

  test.each([
    [
      'Combobox',
      <Combobox key="combobox" openOnFocus>
        <ComboboxInput placeholder="Type here" />
        <ComboboxList>
          <ComboboxOption label="Foo" value="101" />
          <ComboboxOption label="Bar" value="102" />
        </ComboboxList>
      </Combobox>,
    ],
    [
      'ComboboxMulti',
      <ComboboxMulti key="combobox-multi" openOnFocus>
        <ComboboxMultiInput placeholder="Type here" />
        <ComboboxMultiList>
          <ComboboxMultiOption label="Foo" value="101" />
          <ComboboxMultiOption label="Bar" value="102" />
        </ComboboxMultiList>
      </ComboboxMulti>,
    ],
  ])('with openOnFocus (%s)', (_, jsx) => {
    const { getByRole, queryByRole, getByPlaceholderText } = renderWithTheme(
      jsx
    )

    expect(queryByRole('listbox')).not.toBeInTheDocument()

    getByPlaceholderText('Type here').focus()
    expect(getByRole('listbox')).toBeInTheDocument()
  })
})

describe('Keyboard navigation', () => {
  const arrowDown = {
    key: 'ArrowDown',
  }
  const arrowUp = {
    key: 'ArrowUp',
  }
  const enter = {
    key: 'Enter',
  }

  test.each([
    [
      'Combobox',
      <Combobox id="with-options" openOnFocus key="combobox">
        <ComboboxInput placeholder="Type here" />
        <ComboboxList>
          <ComboboxOption label="Foo" value="101" />
          <ComboboxOption label="Bar" value="102" />
        </ComboboxList>
      </Combobox>,
    ],
    [
      'ComboboxMulti',
      <ComboboxMulti id="with-options" openOnFocus key="combobox-multi">
        <ComboboxMultiInput placeholder="Type here" />
        <ComboboxMultiList>
          <ComboboxMultiOption label="Foo" value="101" />
          <ComboboxMultiOption label="Bar" value="102" />
        </ComboboxMultiList>
      </ComboboxMulti>,
    ],
  ])('arrows and enter (%s)', (name, jsx) => {
    const {
      getByText,
      getAllByRole,
      getByRole,
      queryByRole,
      getByPlaceholderText,
    } = renderWithTheme(jsx)

    expect(queryByRole('listbox')).not.toBeInTheDocument()

    const input = getByPlaceholderText('Type here')

    fireEvent.keyDown(input, arrowDown)
    expect(getByRole('listbox')).toBeInTheDocument()

    const items = getAllByRole('option')
    expect(input).toHaveValue('')
    expect(items[0]).toHaveAttribute('aria-selected', 'false')
    expect(items[1]).toHaveAttribute('aria-selected', 'false')

    fireEvent.keyDown(input, arrowDown)
    expect(input).toHaveValue('Foo')
    expect(items[0]).toHaveAttribute('aria-selected', 'true')
    expect(items[1]).toHaveAttribute('aria-selected', 'false')

    fireEvent.keyDown(input, arrowDown)
    expect(input).toHaveValue('Bar')
    expect(items[0]).toHaveAttribute('aria-selected', 'false')
    expect(items[1]).toHaveAttribute('aria-selected', 'true')

    fireEvent.keyDown(input, arrowDown)
    expect(input).toHaveValue('')
    expect(items[0]).toHaveAttribute('aria-selected', 'false')
    expect(items[1]).toHaveAttribute('aria-selected', 'false')

    fireEvent.keyDown(input, arrowUp)
    expect(input).toHaveValue('Bar')
    expect(items[0]).toHaveAttribute('aria-selected', 'false')
    expect(items[1]).toHaveAttribute('aria-selected', 'true')

    fireEvent.keyDown(input, enter)
    expect(queryByRole('listbox')).not.toBeInTheDocument()

    if (name === 'Combobox') {
      // Selected value is the input's value
      expect(input).toHaveValue('Bar')
    } else {
      // Selected value is a chip
      expect(getByText('Bar')).toBeInTheDocument()
    }
  })

  test('arrows and enter with autoComplete = false', () => {
    const {
      getAllByRole,
      getByRole,
      queryByRole,
      getByPlaceholderText,
    } = renderWithTheme(
      <Combobox id="with-options" openOnFocus>
        <ComboboxInput placeholder="Type here" autoComplete={false} />
        <ComboboxList>
          <ComboboxOption label="Foo" value="101" />
          <ComboboxOption label="Bar" value="102" />
        </ComboboxList>
      </Combobox>
    )

    expect(queryByRole('listbox')).not.toBeInTheDocument()

    const input = getByPlaceholderText('Type here')

    fireEvent.keyDown(input, arrowDown)
    expect(getByRole('listbox')).toBeInTheDocument()

    const items = getAllByRole('option')
    expect(input).toHaveValue('')
    expect(items[0]).toHaveAttribute('aria-selected', 'false')
    expect(items[1]).toHaveAttribute('aria-selected', 'false')

    fireEvent.keyDown(input, arrowDown)
    expect(input).toHaveValue('')
    expect(items[0]).toHaveAttribute('aria-selected', 'true')
    expect(items[1]).toHaveAttribute('aria-selected', 'false')

    fireEvent.keyDown(input, arrowDown)
    expect(input).toHaveValue('')
    expect(items[0]).toHaveAttribute('aria-selected', 'false')
    expect(items[1]).toHaveAttribute('aria-selected', 'true')

    fireEvent.keyDown(input, arrowDown)
    expect(input).toHaveValue('')
    expect(items[0]).toHaveAttribute('aria-selected', 'true')
    expect(items[1]).toHaveAttribute('aria-selected', 'false')

    fireEvent.keyDown(input, arrowUp)
    expect(input).toHaveValue('')
    expect(items[0]).toHaveAttribute('aria-selected', 'false')
    expect(items[1]).toHaveAttribute('aria-selected', 'true')

    fireEvent.keyDown(input, enter)
    expect(input).toHaveValue('Bar')
    expect(queryByRole('listbox')).not.toBeInTheDocument()
  })
})
