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

// for the requestAnimationFrame in handleBlur (not working currently)
// jest.useFakeTimers()

afterEach(cleanup)

describe('<Combobox/> with options', () => {
  test('with handleChange', () => {
    const options = [{ value: 'FOO' }, { value: 'BAR' }]
    const handleChange = jest.fn()
    const {
      // getAllByRole,
      queryByText,
      getByText,
      getByPlaceholderText,
    } = renderWithTheme(
      <Combobox
        options={options}
        id="with-options"
        inputProps={{ placeholder: 'Search' }}
        onChange={handleChange}
      />
    )
    expect(queryByText('FOO')).not.toBeInTheDocument()
    expect(queryByText('BAR')).not.toBeInTheDocument()

    const input = getByPlaceholderText('Search')
    expect(input).toBeVisible()

    act(() => {
      fireEvent.click(input)
    })

    // const foo = getByText('FOO')
    const bar = getByText('BAR')

    // Clicking on the options should fire onBlur on the input and
    // trigger the state transition that allows in an updated input value.
    // It doesn't, and the following doesn't work to fake it, so we can't test input value.
    // act(() => {
    // getAllByRole('option')[0].focus()
    // input.blur()
    // })
    fireEvent.click(bar)
    // fireEvent.click(foo)

    expect(handleChange).toHaveBeenCalledTimes(1)
    // expect(handleChange).toHaveBeenCalledWith({ value: 'FOO' })
    expect(handleChange).toHaveBeenCalledWith({ value: 'BAR' })
  })

  test('with openOnFocus', () => {
    const options = [{ value: 'FOO' }, { value: 'BAR' }]
    const { getByRole, queryByRole, getByPlaceholderText } = renderWithTheme(
      <Combobox
        options={options}
        id="with-options"
        inputProps={{ placeholder: 'Search' }}
        openOnFocus
      />
    )

    expect(queryByRole('listbox')).not.toBeInTheDocument()

    getByPlaceholderText('Search').focus()
    expect(getByRole('listbox')).toBeInTheDocument()
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

    test('arrows and enter', () => {
      const options = [{ value: 'FOO' }, { value: 'BAR' }]
      const {
        getAllByRole,
        getByRole,
        queryByRole,
        getByPlaceholderText,
      } = renderWithTheme(
        <Combobox
          options={options}
          id="with-options"
          inputProps={{ placeholder: 'Search' }}
          openOnFocus
        />
      )

      expect(queryByRole('listbox')).not.toBeInTheDocument()

      const input = getByPlaceholderText('Search')

      fireEvent.keyDown(input, arrowDown)
      expect(getByRole('listbox')).toBeInTheDocument()

      const items = getAllByRole('option')
      expect(input).toHaveValue('')
      expect(items[0]).not.toHaveAttribute('aria-selected')
      expect(items[1]).not.toHaveAttribute('aria-selected')

      fireEvent.keyDown(input, arrowDown)
      expect(input).toHaveValue('FOO')
      expect(items[0]).toHaveAttribute('aria-selected', 'true')
      expect(items[1]).toHaveAttribute('aria-selected', 'false')

      fireEvent.keyDown(input, arrowDown)
      expect(input).toHaveValue('BAR')
      expect(items[0]).toHaveAttribute('aria-selected', 'false')
      expect(items[1]).toHaveAttribute('aria-selected', 'true')

      fireEvent.keyDown(input, arrowDown)
      expect(input).toHaveValue('')
      expect(items[0]).not.toHaveAttribute('aria-selected')
      expect(items[1]).not.toHaveAttribute('aria-selected')

      fireEvent.keyDown(input, arrowUp)
      expect(input).toHaveValue('BAR')
      expect(items[0]).toHaveAttribute('aria-selected', 'false')
      expect(items[1]).toHaveAttribute('aria-selected', 'true')

      fireEvent.keyDown(input, enter)
      expect(input).toHaveValue('BAR')
      expect(queryByRole('listbox')).not.toBeInTheDocument()
    })

    test('arrows and enter with autoComplete = false', () => {
      const options = [{ value: 'FOO' }, { value: 'BAR' }]
      const {
        getAllByRole,
        getByRole,
        queryByRole,
        getByPlaceholderText,
      } = renderWithTheme(
        <Combobox
          options={options}
          id="with-options"
          inputProps={{ autocomplete: false, placeholder: 'Search' }}
          openOnFocus
        />
      )

      expect(queryByRole('listbox')).not.toBeInTheDocument()

      const input = getByPlaceholderText('Search')

      fireEvent.keyDown(input, arrowDown)
      expect(getByRole('listbox')).toBeInTheDocument()

      const items = getAllByRole('option')
      expect(input).toHaveValue('')
      expect(items[0]).not.toHaveAttribute('aria-selected')
      expect(items[1]).not.toHaveAttribute('aria-selected')

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
      expect(input).toHaveValue('BAR')
      expect(queryByRole('listbox')).not.toBeInTheDocument()
    })
  })
})

describe('<Combobox/> with children', () => {
  test('Renders children, merges callbacks', () => {
    const handleChange = jest.fn()
    const handleClick = jest.fn()
    const { getByText, getByTestId, queryByText } = renderWithTheme(
      <Combobox options={[{ value: 'Apples' }]} onChange={handleChange}>
        <ComboboxInput data-testid="select-input" />
        <ComboboxList>
          <ComboboxOption value="Foo" data={101} onClick={handleClick} />
          <ComboboxOption value="Bar" data={102} />
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
