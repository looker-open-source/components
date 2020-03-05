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
import { act, cleanup, fireEvent } from '@testing-library/react'
import React from 'react'

import { Select } from './Select'
// for the requestAnimationFrame in handleBlur (not working currently)
// jest.useFakeTimers()

afterEach(cleanup)

describe('<Select/>', () => {
  test('with options and handleChange', () => {
    const options = [{ value: 'FOO' }, { value: 'BAR' }]
    const handleChange = jest.fn()
    const {
      // getAllByRole,
      queryByText,
      getByText,
      getByPlaceholderText,
    } = renderWithTheme(
      <Select options={options} placeholder="Search" onChange={handleChange} />
    )
    expect(queryByText('FOO')).not.toBeInTheDocument()
    expect(queryByText('BAR')).not.toBeInTheDocument()

    const input = getByPlaceholderText('Search')
    expect(input).toBeVisible()

    act(() => {
      fireEvent.mouseDown(input)
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
    expect(handleChange).toHaveBeenCalledWith('BAR')
  })
  test('with option descriptions and group titles', () => {
    const options = [
      {
        options: [{ value: 'BAR' }, { value: 'BAZ' }],
        title: 'FOO',
      },
      {
        options: [
          { description: 'A description for something', value: 'something' },
        ],
        title: 'OTHER',
      },
    ]
    const handleChange = jest.fn()
    const { getByText, getByPlaceholderText } = renderWithTheme(
      <Select options={options} placeholder="Search" onChange={handleChange} />
    )

    const input = getByPlaceholderText('Search')
    expect(input).toBeVisible()

    act(() => {
      fireEvent.mouseDown(input)
    })

    const foo = getByText('FOO')
    const other = getByText('OTHER')
    const desc = getByText('A description for something')

    expect(foo).toBeInTheDocument()
    expect(other).toBeInTheDocument()
    expect(desc).toBeInTheDocument()

    // A click on a title shouldn't do anything
    fireEvent.click(foo)
    // Description is part of the option so the click triggers change
    fireEvent.click(desc)

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('something')
  })

  test('defaultValue', () => {
    const options = [
      { label: 'Foo', value: 'FOO' },
      { label: 'Bar', value: 'BAR' },
    ]
    const { getByPlaceholderText } = renderWithTheme(
      <Select options={options} placeholder="Search" defaultValue="BAR" />
    )

    const input = getByPlaceholderText('Search')
    // should not default to first option
    expect(input).toHaveValue('Bar')
  })

  test('placeholder, no defaultValue', () => {
    const options = [{ value: 'FOO' }, { value: 'BAR' }]
    const { getByPlaceholderText } = renderWithTheme(
      <Select options={options} placeholder="Search" />
    )

    const input = getByPlaceholderText('Search')
    // should not default to first option
    expect(input).toHaveValue('')
  })

  test('isClearable, no defaultValue', () => {
    const options = [{ value: 'FOO' }, { value: 'BAR' }]
    const { getByTestId } = renderWithTheme(
      <Select options={options} isClearable data-testid="wrapper" />
    )

    const input = getByTestId('wrapper').querySelector('input')
    // should not default to first option
    expect(input).not.toHaveValue()
  })

  test('default to first option', () => {
    const options = [
      { label: 'Foo', value: 'FOO' },
      { label: 'Bar', value: 'BAR' },
    ]
    const { getByTestId } = renderWithTheme(
      <Select options={options} data-testid="wrapper" />
    )

    const input = getByTestId('wrapper').querySelector('input')
    // should default to first option
    expect(input).toHaveValue('Foo')
  })

  test('no options', () => {
    const handleChange = jest.fn()
    const { getByPlaceholderText, getByText } = renderWithTheme(
      <Select placeholder="Search" onChange={handleChange} />
    )

    const input = getByPlaceholderText('Search')

    act(() => {
      fireEvent.mouseDown(input)
    })

    const noOptions = getByText('No options')
    fireEvent.click(noOptions)

    expect(handleChange).not.toHaveBeenCalled()
  })
})
