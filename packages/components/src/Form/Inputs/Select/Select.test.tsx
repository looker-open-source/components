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

import { ComboboxOptionIndicatorFunction } from '../Combobox'
import { Select } from './Select'
import { SelectMulti } from './SelectMulti'
import { SelectOptionObject } from './SelectOptions'
// for the requestAnimationFrame in handleBlur (not working currently)
// jest.useFakeTimers()

afterEach(cleanup)

describe('Select / SelectMulti', () => {
  const options = [{ value: 'FOO' }, { value: 'BAR' }]

  test.each([
    [
      'Select',
      (onChange: () => void) => (
        <Select
          options={options}
          placeholder="Search"
          onChange={onChange}
          key="select"
        />
      ),
    ],
    [
      'SelectMulti',
      (onChange: () => void) => (
        <SelectMulti
          options={options}
          placeholder="Search"
          onChange={onChange}
          key="select-multi"
        />
      ),
    ],
  ])('with options and handleChange (%s)', (name, getJSX) => {
    const handleChange = jest.fn()
    const {
      // getAllByRole,
      queryByText,
      getByText,
      getByPlaceholderText,
    } = renderWithTheme(getJSX(handleChange))
    expect(queryByText('FOO')).not.toBeInTheDocument()
    expect(queryByText('BAR')).not.toBeInTheDocument()

    const input = getByPlaceholderText('Search')
    expect(input).toBeVisible()

    fireEvent.mouseDown(input)

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
    const onChangeArg = name === 'SelectMulti' ? ['BAR'] : 'BAR'
    expect(handleChange).toHaveBeenCalledWith(onChangeArg)

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  const groupedOptions = [
    {
      label: 'FOO',
      options: [{ value: 'BAR' }, { value: 'BAZ' }],
    },
    {
      label: 'OTHER',
      options: [
        { description: 'A description for something', value: 'something' },
      ],
    },
    // label is not required
    {
      options: [{ value: 'QUX' }, { value: 'TEST' }],
    },
  ]

  test.each([
    [
      'Select',
      (onChange: () => void) => (
        <Select
          options={groupedOptions}
          placeholder="Search"
          onChange={onChange}
          key="select"
        />
      ),
    ],
    [
      'SelectMulti',
      (onChange: () => void) => (
        <SelectMulti
          options={groupedOptions}
          placeholder="Search"
          onChange={onChange}
          key="select-multi"
        />
      ),
    ],
  ])('with option descriptions and group labels (%s)', (name, getJSX) => {
    const handleChange = jest.fn()
    const { getByText, getByPlaceholderText } = renderWithTheme(
      getJSX(handleChange)
    )

    const input = getByPlaceholderText('Search')
    expect(input).toBeVisible()

    fireEvent.mouseDown(input)

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

    const onChangeArg = name === 'SelectMulti' ? ['something'] : 'something'
    expect(handleChange).toHaveBeenCalledWith(onChangeArg)

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  const dimensions = {
    maxHeight: 400,
    maxWidth: 800,
    minWidth: 300,
    width: '50vw',
  }

  test.each([
    [
      'Select',
      <Select
        options={groupedOptions}
        placeholder="Search"
        listLayout={dimensions}
        key="select"
      />,
    ],
    [
      'SelectMulti',
      <SelectMulti
        options={groupedOptions}
        placeholder="Search"
        listLayout={dimensions}
        key="select-multi"
      />,
    ],
  ])('with listLayout (%s)', (_, jsx) => {
    const { getByRole, getByPlaceholderText } = renderWithTheme(jsx)

    const input = getByPlaceholderText('Search')
    expect(input).toBeVisible()

    fireEvent.mouseDown(input)

    const list = getByRole('listbox')
    expect(list).toHaveStyleRule('max-height', '400px')
    expect(list).toHaveStyleRule('max-width', '800px')
    expect(list).toHaveStyleRule('min-width', '300px')
    expect(list).toHaveStyleRule('width', '50vw')

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  const getIndicatorJSX = (listLevel: boolean) => (
    indicator: ComboboxOptionIndicatorFunction
  ) => (
    <Select
      options={options.map((opt) => ({
        ...opt,
        ...(listLevel ? {} : { indicator }),
      }))}
      value="FOO"
      placeholder="Search"
      indicator={listLevel ? indicator : undefined}
      key="select"
    />
  )

  const getIndicatorJSXMulti = (listLevel: boolean) => (
    indicator: ComboboxOptionIndicatorFunction
  ) => (
    <SelectMulti
      options={options.map((opt) => ({
        ...opt,
        ...(listLevel ? {} : { indicator }),
      }))}
      values={['FOO']}
      placeholder="Search"
      indicator={listLevel ? indicator : undefined}
      key="select-multi"
    />
  )

  test.each([
    ['list level (Select)', getIndicatorJSX(true)],
    ['list level (SelectMulti)', getIndicatorJSXMulti(true)],
    ['option level (Select)', getIndicatorJSX(false)],
    ['option level (SelectMulti)', getIndicatorJSXMulti(false)],
  ])('Customize the indicator at the %s', (_, getJSX) => {
    const indicator = jest.fn()
    const { queryByTitle, getByText, getByPlaceholderText } = renderWithTheme(
      getJSX(indicator)
    )

    const input = getByPlaceholderText('Search')
    fireEvent.click(input)

    expect(indicator).toHaveBeenCalledTimes(2)
    expect(indicator).toHaveBeenNthCalledWith(1, {
      // ComboboxList.persistSelection is true for Select/SelectMulti
      isActive: true,
      isSelected: true,
      label: undefined,
      value: 'FOO',
    })
    expect(indicator).toHaveBeenNthCalledWith(2, {
      isActive: false,
      isSelected: false,
      label: undefined,
      value: 'BAR',
    })

    const check = queryByTitle('Check')
    expect(check).not.toBeInTheDocument()

    indicator.mockClear()

    const bar = getByText('BAR')
    fireEvent.keyDown(bar, {
      key: 'ArrowDown',
    })

    expect(indicator).toHaveBeenCalledTimes(2)
    expect(indicator).toHaveBeenNthCalledWith(1, {
      // ComboboxList.persistSelection is true for Select/SelectMulti
      isActive: false,
      isSelected: true,
      label: undefined,
      value: 'FOO',
    })
    expect(indicator).toHaveBeenNthCalledWith(2, {
      isActive: true,
      isSelected: false,
      label: undefined,
      value: 'BAR',
    })

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  describe('no options', () => {
    test.each([
      [
        'Select',
        (onChange: () => void) => (
          <Select placeholder="Search" onChange={onChange} key="select" />
        ),
      ],
      [
        'SelectMulti',
        (onChange: () => void) => (
          <SelectMulti
            placeholder="Search"
            onChange={onChange}
            key="select-multi"
          />
        ),
      ],
    ])('label does nothing when clicked (%s)', (_, getJSX) => {
      const handleChange = jest.fn()
      const { getByPlaceholderText, getByText } = renderWithTheme(
        getJSX(handleChange)
      )

      const input = getByPlaceholderText('Search')

      fireEvent.mouseDown(input)

      const noOptions = getByText('No options')
      fireEvent.click(noOptions)

      expect(handleChange).not.toHaveBeenCalled()

      // Close popover to silence act() warning
      fireEvent.click(document)
    })

    const label = 'Your search returned no results'
    test.each([
      [
        'Select',
        <Select placeholder="Search" noOptionsLabel={label} key="select" />,
      ],
      [
        'SelectMulti',
        <SelectMulti
          placeholder="Search"
          noOptionsLabel={label}
          key="select-multi"
        />,
      ],
    ])('custom label text (%s)', (_, jsx) => {
      const { getByPlaceholderText, queryByText } = renderWithTheme(jsx)

      const input = getByPlaceholderText('Search')

      fireEvent.mouseDown(input)

      const noOptions = queryByText(label)
      expect(noOptions).toBeVisible()

      // Close popover to silence act() warning
      fireEvent.click(document)
    })
  })

  describe('windowed options', () => {
    const testArray: Array<[
      string,
      (longOptions: SelectOptionObject[]) => JSX.Element
    ]> = [
      [
        'Select',
        (longOptions) => (
          <Select placeholder="Search" options={longOptions} key="select" />
        ),
      ],
      [
        'SelectMulti',
        (longOptions) => (
          <SelectMulti
            placeholder="Search"
            options={longOptions}
            key="select-multi"
          />
        ),
      ],
    ]

    test.each(testArray)('100 options do not all render', (_, getJSX) => {
      const longOptions = Array.from(Array(100), (_, index) => ({
        value: `${index}`,
      }))
      const { getByPlaceholderText, queryByText } = renderWithTheme(
        getJSX(longOptions)
      )

      const input = getByPlaceholderText('Search')

      fireEvent.mouseDown(input)

      expect(queryByText('0')).toBeInTheDocument()
      expect(queryByText('5')).toBeInTheDocument()
      // js-dom doesn't do layout so only the first option + 5 buffer are rendered
      expect(queryByText('6')).not.toBeInTheDocument()

      // Close popover to silence act() warning
      fireEvent.click(document)
    })

    test.each(testArray)('99 options all render', (_, getJSX) => {
      const longOptions = Array.from(Array(99), (_, index) => ({
        value: `${index}`,
      }))
      const { getByPlaceholderText, queryByText } = renderWithTheme(
        getJSX(longOptions)
      )

      const input = getByPlaceholderText('Search')

      fireEvent.mouseDown(input)

      expect(queryByText('0')).toBeInTheDocument()
      expect(queryByText('98')).toBeInTheDocument()

      // Close popover to silence act() warning
      fireEvent.click(document)
    })

    const label = 'Your search returned no results'
    test.each([
      [
        'Select',
        <Select placeholder="Search" noOptionsLabel={label} key="select" />,
      ],
      [
        'SelectMulti',
        <SelectMulti
          placeholder="Search"
          noOptionsLabel={label}
          key="select-multi"
        />,
      ],
    ])('custom label text (%s)', (_, jsx) => {
      const { getByPlaceholderText, queryByText } = renderWithTheme(jsx)

      const input = getByPlaceholderText('Search')

      fireEvent.mouseDown(input)

      const noOptions = queryByText(label)
      expect(noOptions).toBeVisible()

      // Close popover to silence act() warning
      fireEvent.click(document)
    })
  })
})

describe('Select', () => {
  test('value', () => {
    const options = [
      { label: 'Foo', value: 'FOO' },
      { label: 'Bar', value: 'BAR' },
    ]
    const { getByPlaceholderText, queryByRole } = renderWithTheme(
      <Select
        options={options}
        placeholder="Search"
        value="BAR"
        onChange={jest.fn()}
      />
    )

    const input = getByPlaceholderText('Search')
    // should not default to first option
    expect(input).toHaveValue('Bar')
    // verify that clear all icon button is not show (isClearable not set)
    expect(queryByRole('button')).not.toBeInTheDocument()
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

  test('isClearable', () => {
    const handleChange = jest.fn()
    const options = [
      { label: 'Foo', value: 'FOO' },
      { label: 'Bar', value: 'BAR' },
    ]
    const { getByPlaceholderText, getByRole } = renderWithTheme(
      <Select
        options={options}
        placeholder="Search"
        defaultValue="BAR"
        onChange={handleChange}
        isClearable
      />
    )

    const input = getByPlaceholderText('Search')
    expect(input).toHaveValue('Bar')

    const clearButton = getByRole('button')
    fireEvent.click(clearButton)

    expect(input).toHaveValue('')
    expect(handleChange).toHaveBeenCalledWith('')
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
})
