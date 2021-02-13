/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import { InputFiltersChip } from './InputFiltersChip'

describe('InputFiltersChip', () => {
  const filter = {
    field: 'role',
    formatValue: (value: string) => value.toUpperCase(),
    options: ['user', 'group-admin', 'admin', 'pizza'],
    value: 'user',
  }
  const onDelete = jest.fn()

  test('renders', () => {
    const { getByText } = renderWithTheme(
      <InputFiltersChip filter={filter} onDelete={onDelete} />
    )
    expect(getByText('role:')).toBeInTheDocument()
  })

  test('onClick', () => {
    const onClick = jest.fn()

    const { queryByText } = renderWithTheme(
      <InputFiltersChip filter={filter} onClick={onClick} onDelete={onDelete} />
    )
    const filterBy = queryByText('role:')
    filterBy && fireEvent.click(filterBy)

    expect(filterBy).toBeInTheDocument()
    expect(onClick).toBeCalled()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('formats value if formatValue is passed', () => {
    const { queryByText } = renderWithTheme(
      <InputFiltersChip filter={filter} onDelete={onDelete} />
    )
    const filterBy = queryByText('USER')

    expect(filterBy).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })
})
