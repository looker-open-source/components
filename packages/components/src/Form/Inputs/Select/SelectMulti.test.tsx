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

import { firePasteEvent, renderWithTheme } from '@looker/components-test-utils'
import { cleanup, fireEvent, screen } from '@testing-library/react'
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
})

describe('closeOnSelect', () => {
  test('false by default', () => {
    const { getByText, getAllByText, getByPlaceholderText } = renderWithTheme(
      <SelectMulti options={basicOptions} placeholder="Search" />
    )

    const input = getByPlaceholderText('Search')
    fireEvent.mouseDown(input)

    const bar = getByText('Bar')

    expect(getByText('Foo')).toBeVisible()
    expect(bar).toBeVisible()

    fireEvent.click(bar)

    expect(getByText('Foo')).toBeVisible()
    expect(getAllByText('Bar')).toHaveLength(2)

    fireEvent.click(document)
  })

  test('true', () => {
    const { getByText, queryByText, getByPlaceholderText } = renderWithTheme(
      <SelectMulti options={basicOptions} placeholder="Search" closeOnSelect />
    )

    const input = getByPlaceholderText('Search')
    fireEvent.mouseDown(input)

    const bar = getByText('Bar')

    expect(getByText('Foo')).toBeVisible()
    expect(bar).toBeVisible()

    fireEvent.click(bar)
    // Bar is now a chip
    expect(getByText('Bar')).toBeVisible()
    // list has closed
    expect(queryByText('Foo')).not.toBeInTheDocument()

    fireEvent.click(document)
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

      fireEvent.keyDown(input, {
        key: 'Backspace',
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

      fireEvent.keyDown(input, {
        key: 'Backspace',
      })

      expect(getByText('Foo')).toBeVisible()
      expect(queryByText('Bar')).toBeVisible()
    })
  })

  describe('freeInput', () => {
    test('false by default', () => {
      const onChangeMock = jest.fn()
      renderWithTheme(
        <SelectMulti
          options={basicOptions}
          defaultValues={['FOO', 'BAR']}
          placeholder="Search"
          onChange={onChangeMock}
        />
      )

      const input = screen.getByPlaceholderText('Search')
      fireEvent.change(input, { target: { value: 'baz,qux,' } })

      expect(onChangeMock).not.toHaveBeenCalled()
      expect(input).toHaveValue('baz,qux,')

      fireEvent.click(document)
    })

    test('true', () => {
      const onChangeMock = jest.fn()
      renderWithTheme(
        <SelectMulti
          options={basicOptions}
          defaultValues={['FOO', 'BAR']}
          placeholder="Search"
          onChange={onChangeMock}
          freeInput
        />
      )

      const input = screen.getByPlaceholderText('Search')
      fireEvent.change(input, { target: { value: 'baz,qux,' } })

      expect(onChangeMock).toHaveBeenCalledWith(['FOO', 'BAR', 'baz', 'qux'])
      expect(input).toHaveValue('')

      fireEvent.click(document)
    })

    test('creates value and closes list on blur', async () => {
      const onChangeMock = jest.fn()
      renderWithTheme(
        <>
          <button>A random button</button>
          <SelectMulti
            options={basicOptions}
            placeholder="Search"
            onChange={onChangeMock}
            freeInput
          />
        </>
      )

      const input = screen.getByPlaceholderText('Search')
      input.focus()
      fireEvent.change(input, { target: { value: 'baz' } })
      expect(screen.getByRole('listbox')).toBeVisible()
      screen.getByText('A random button').focus()

      expect(onChangeMock).toHaveBeenCalledWith(['baz'])
      expect(input).toHaveValue('')

      expect(screen.queryByRole('listbox')).toBe(null)
    })

    test('copy/paste', () => {
      const onChangeMock = jest.fn()
      renderWithTheme(
        <SelectMulti
          options={basicOptions}
          values={['FOO', 'BAR']}
          onChange={onChangeMock}
          placeholder="Search"
          freeInput
        />
      )

      const input = screen.getByPlaceholderText('Search')
      const hiddenInput = screen.getByTestId('hidden-input')

      fireEvent.keyDown(input, { key: 'a', metaKey: true })
      // testing the hidden input value b/c jsdom do clipboard
      expect(hiddenInput).toHaveDisplayValue(
        '[{"label":"Foo","value":"FOO"},{"label":"Bar","value":"BAR"}]'
      )

      firePasteEvent(
        input,
        '[{"label":"Baz","value":"BAZ"},{"label":"Qux","value":"QUX"}]'
      )
      fireEvent.change(input, {
        target: {
          value:
            '[{"label":"Baz","value":"BAZ"},{"label":"Qux","value":"QUX"}]',
        },
      })
      expect(onChangeMock).toHaveBeenCalledWith(['FOO', 'BAR', 'BAZ', 'QUX'])
    })
  })
})
