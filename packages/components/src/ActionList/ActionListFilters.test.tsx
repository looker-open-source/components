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
import { ActionListFilters } from './ActionListFilters'

describe('InputFilters', () => {
  const filters = [
    { field: 'role', value: 'admin' },
    { field: 'group', label: 'Group', value: 'pizza-lovers' },
    { field: 'name', label: 'Name' },
    { field: 'status' },
    { field: 'model' },
    { field: 'trigger' },
    { field: 'buildAt', label: 'Last Build Time' },
  ]

  test('render ActionListFilters display InputFilter', () => {
    const { getByPlaceholderText } = renderWithTheme(
      <ActionListFilters filters={filters} />
    )

    expect(getByPlaceholderText('Filter List')).toBeInTheDocument()
  })

  test('render ActionListFilters display columns icon', () => {
    const { getByText } = renderWithTheme(
      <ActionListFilters canSelectDisplayedColumns filters={filters} />
    )
    expect(getByText('Select columns to display')).toBeInTheDocument()
  })
})
