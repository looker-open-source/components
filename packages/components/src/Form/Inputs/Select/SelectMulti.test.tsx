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
    test('adds create option', async () => {
      const options = [
        { label: 'Foo', value: 'FOO' },
        { label: 'Bar', value: 'BAR' },
        { label: 'Baz', value: 'BAZ' },
        { label: 'Qux', value: 'QUX' },
      ]
      const { getByText, getByPlaceholderText } = renderWithTheme(
        <SelectMulti
          options={options}
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
      // Resolves "act" warning
      await wait()
    })
  })
})
