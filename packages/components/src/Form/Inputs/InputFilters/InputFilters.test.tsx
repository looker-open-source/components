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

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent } from '@testing-library/react'
import { InputFilters } from './InputFilters'

describe('InputFilters', () => {
  const filters = [
    { field: 'role', options: ['user', 'group-admin', 'admin', 'pizza'] },
    {
      field: 'group',
      label: 'Group',
      options: ['Gouda', 'Cheddar', 'Swiss', 'Pizza'],
    },
    {
      field: 'name',
      label: 'Name',
      options: ['Name 1', 'Name 2', 'Name 3', 'pizza'],
    },
    { field: 'status', options: ['Success', 'Failed', 'in-progress', 'pizza'] },
    {
      field: 'buildAt',
      label: 'Last Build Time',
      options: [
        '01-22-20 33:33:33',
        '02-13-20 12:30:55',
        '05-28-20 01:45:57',
        'pizza',
      ],
    },
  ]

  test('renders InputFilters', () => {
    const { getByPlaceholderText } = renderWithTheme(
      <InputFilters filters={filters} />
    )
    expect(getByPlaceholderText('Filter List')).toBeInTheDocument()
  })

  test('InputFilter displays list of filters', () => {
    const { getByPlaceholderText, getByText } = renderWithTheme(
      <InputFilters filters={filters} />
    )

    const input = getByPlaceholderText('Filter List')
    fireEvent.click(input)
    expect(getByText('role')).toBeInTheDocument()
    expect(getByText('Group')).toBeInTheDocument()
    expect(getByText('Last Build Time')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('InputFilter filter clicked gets displayed ', () => {
    const { getByPlaceholderText, getByText } = renderWithTheme(
      <InputFilters filters={filters} />
    )

    const input = getByPlaceholderText('Filter List')
    fireEvent.click(input)

    const group = getByText('Group')

    expect(getByText('role')).toBeInTheDocument()
    expect(group).toBeInTheDocument()

    fireEvent.click(getByText('role'))

    expect(getByText('role')).toBeInTheDocument()
    expect(group).not.toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('InputFilter shows editing options ', () => {
    const { getByPlaceholderText, getByText } = renderWithTheme(
      <InputFilters filters={filters} />
    )

    const input = getByPlaceholderText('Filter List')
    fireEvent.click(input)

    expect(getByText('role')).toBeInTheDocument()

    fireEvent.click(getByText('role'))

    // const editor = getByText('user')
    // fireEvent.click(getByText('user'))

    expect(getByText('user')).toBeInTheDocument()
    expect(getByText('admin')).toBeInTheDocument()
    expect(getByText('pizza')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('InputFilter shows chip with full filter selected ', () => {
    const { getByPlaceholderText, getByText } = renderWithTheme(
      <InputFilters filters={filters} />
    )

    const input = getByPlaceholderText('Filter List')
    fireEvent.click(input)

    expect(getByText('role')).toBeInTheDocument()

    fireEvent.click(getByText('role'))

    fireEvent.click(getByText('user'))
    expect(getByText('role:')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('InputFilter doest show filter displayed as chip', () => {
    const { getByPlaceholderText, getByText, queryByText } = renderWithTheme(
      <InputFilters filters={filters} />
    )

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(getByText('role')).toBeInTheDocument()

    fireEvent.click(getByText('role'))

    fireEvent.click(getByText('user'))

    expect(getByText('role:')).toBeInTheDocument()

    fireEvent.click(document)

    fireEvent.click(getByPlaceholderText('Filter List'))

    expect(queryByText('role')).not.toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })
})
