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
import { act, cleanup, fireEvent, wait } from '@testing-library/react'
import React from 'react'

import { SelectMulti } from './SelectMulti'

afterEach(cleanup)

const basicOptions = [
  { label: 'Foo', value: 'FOO' },
  { label: 'Bar', value: 'BAR' },
]

describe('SelectMulti', () => {
  test('values', () => {
    const options = [
      { label: 'Foo', value: 'FOO' },
      { label: 'Bar', value: 'BAR' },
      { label: 'Baz', value: 'BAZ' },
      { label: 'Qux', value: 'QUX' },
    ]
    const { getByText, getAllByRole } = renderWithTheme(
      <SelectMulti
        options={options}
        placeholder="Search"
        values={['BAZ', 'FOO']}
        onChange={jest.fn()}
      />
    )
    // should already have the 2 chips
    expect(getByText('Baz')).toBeVisible()
    expect(getByText('Foo')).toBeVisible()
    // 2 chip remove buttons and 1 clear all button
    expect(getAllByRole('button')).toHaveLength(3)
  })

  test('defaultValues', () => {
    const options = [
      { label: 'Foo', value: 'FOO' },
      { label: 'Bar', value: 'BAR' },
      { label: 'Baz', value: 'BAZ' },
      { label: 'Qux', value: 'QUX' },
    ]
    const { getByText, getAllByRole } = renderWithTheme(
      <SelectMulti
        options={options}
        placeholder="Search"
        defaultValues={['BAR']}
      />
    )
    // should already have the chip
    expect(getByText('Bar')).toBeVisible()
    // 1 chip remove button and 1 clear all button
    expect(getAllByRole('button')).toHaveLength(2)
  })

  test('defaultValues', () => {
    const options = [
      { label: 'Foo', value: 'FOO' },
      { label: 'Bar', value: 'BAR' },
      { label: 'Baz', value: 'BAZ' },
      { label: 'Qux', value: 'QUX' },
    ]
    const { getByText, getAllByRole } = renderWithTheme(
      <SelectMulti options={options} defaultValues={['BAR']} />
    )
    // should already have the chip
    expect(getByText('Bar')).toBeVisible()
    // 1 chip remove button and 1 clear all button
    expect(getAllByRole('button')).toHaveLength(2)
  })

  describe('showCreate', () => {
    test('create option replaces "No options"', async () => {
      const { getByText, getByPlaceholderText, queryByText } = renderWithTheme(
        <SelectMulti
          defaultValues={['test value']}
          placeholder="Search"
          isFilterable
          showCreate
        />
      )

      const input = getByPlaceholderText('Search')
      act(() => {
        fireEvent.focus(input)
        fireEvent.change(input, { target: { value: 'some text' } })
      })

      expect(getByText('Create "some text"')).toBeVisible()
      expect(queryByText('No options')).not.toBeInTheDocument()

      act(() => {
        fireEvent.focus(input)
        fireEvent.change(input, { target: { value: 'test value' } })
      })

      // create option doesn't show if inputValue is already in current values
      expect(getByText('No options')).toBeVisible()
      expect(queryByText('Create "test value"')).not.toBeInTheDocument()
      // Resolves "act" warning
      await wait()
    })

    test('custom label, checks options', async () => {
      const { getByText, getByPlaceholderText, queryByText } = renderWithTheme(
        <SelectMulti
          options={basicOptions}
          placeholder="Search"
          isFilterable
          showCreate
          formatCreateLabel={(inputValue: string) =>
            `${inputValue} CREATE LABEL`
          }
        />
      )

      const input = getByPlaceholderText('Search')
      act(() => {
        fireEvent.focus(input)
        fireEvent.change(input, { target: { value: 'some text' } })
      })

      expect(getByText('some text CREATE LABEL')).toBeVisible()

      act(() => {
        fireEvent.focus(input)
        fireEvent.change(input, { target: { value: 'foo' } })
      })

      // create option doesn't show if inputValue is in options
      expect(queryByText('foo CREATE LABEL')).not.toBeInTheDocument()
      // Resolves "act" warning
      await wait()
    })
  })
})

describe('closeOnSelect', () => {
  test('false by default', async () => {
    const { getByText, getAllByText, getByPlaceholderText } = renderWithTheme(
      <SelectMulti options={basicOptions} placeholder="Search" />
    )

    const input = getByPlaceholderText('Search')
    act(() => {
      fireEvent.mouseDown(input)
    })

    const bar = getByText('Bar')

    expect(getByText('Foo')).toBeVisible()
    expect(bar).toBeVisible()

    act(() => {
      fireEvent.click(bar)
    })
    expect(getByText('Foo')).toBeVisible()
    expect(getAllByText('Bar')).toHaveLength(2)
    // Resolves "act" warning
    await wait()
  })

  test('true', () => {
    const { getByText, queryByText, getByPlaceholderText } = renderWithTheme(
      <SelectMulti options={basicOptions} placeholder="Search" closeOnSelect />
    )

    const input = getByPlaceholderText('Search')
    act(() => {
      fireEvent.mouseDown(input)
    })

    const bar = getByText('Bar')

    expect(getByText('Foo')).toBeVisible()
    expect(bar).toBeVisible()

    act(() => {
      fireEvent.click(bar)
    })
    // Bar is now a chip
    expect(getByText('Bar')).toBeVisible()
    // list has closed
    expect(queryByText('Foo')).not.toBeInTheDocument()
  })

  describe('removeOnBackspace', () => {
    test('true by default', () => {
      const { getByText, getByPlaceholderText, queryByText } = renderWithTheme(
        <SelectMulti
          options={basicOptions}
          defaultValues={['FOO', 'BAR']}
          placeholder="Search"
        />
      )

      const input = getByPlaceholderText('Search')

      expect(getByText('Foo')).toBeVisible()
      expect(getByText('Bar')).toBeVisible()

      act(() => {
        fireEvent.keyDown(input, {
          key: 'Backspace',
        })
      })

      expect(getByText('Foo')).toBeVisible()
      expect(queryByText('Bar')).not.toBeInTheDocument()
    })

    test('false', () => {
      const { getByText, getByPlaceholderText, queryByText } = renderWithTheme(
        <SelectMulti
          options={basicOptions}
          defaultValues={['FOO', 'BAR']}
          placeholder="Search"
          removeOnBackspace={false}
        />
      )

      const input = getByPlaceholderText('Search')

      expect(getByText('Foo')).toBeVisible()
      expect(getByText('Bar')).toBeVisible()

      act(() => {
        fireEvent.keyDown(input, {
          key: 'Backspace',
        })
      })

      expect(getByText('Foo')).toBeVisible()
      expect(queryByText('Bar')).toBeVisible()
    })
  })
})
