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
    { field: 'role', value: 'admin' },
    { field: 'group', label: 'Group', value: 'pizza-lovers' },
    { field: 'name', label: 'Name' },
    { field: 'status' },
    { field: 'model' },
    { field: 'trigger' },
    { field: 'buildAt', label: 'Last Build Time' },
  ]

  const noUnassignedFilters = [
    { field: 'role', value: 'admin' },
    { field: 'group', label: 'Group', value: 'pizza-lovers' },
    { field: 'name', label: 'Name', value: 'suggestion 1' },
    { field: 'status', value: 'Success' },
    { field: 'model', value: 'model_uno' },
    { field: 'trigger', value: 'data_group_trigger' },
    { field: 'buildAt', label: 'Last Build Time', value: '1-22-20 33:33:33' },
  ]

  const noAssignedFilters = [
    { field: 'role' },
    { field: 'group', label: 'Group' },
    { field: 'name', label: 'Name' },
    { field: 'status' },
    { field: 'model' },
    { field: 'trigger' },
    { field: 'buildAt', label: 'Last Build Time' },
  ]
  test('render InputFilter', () => {
    const { getByPlaceholderText } = renderWithTheme(
      <InputFilters filters={filters} />
    )

    expect(getByPlaceholderText('Filter List')).toBeInTheDocument()
  })

  test('render InputFilter with no filters', () => {
    const { queryByText, getByPlaceholderText } = renderWithTheme(
      <InputFilters filters={[]} />
    )

    const noneAvailableFilters = getByPlaceholderText('Filter List')
    fireEvent.click(noneAvailableFilters)
    expect(document.activeElement === noneAvailableFilters).toBeTruthy()
    expect(queryByText('No options')).toBeInTheDocument()
    expect(queryByText('Name')).not.toBeInTheDocument()
    expect(queryByText('admin')).not.toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('render InputFilter with no unassignedFilters', () => {
    const { getByPlaceholderText, queryByText } = renderWithTheme(
      <InputFilters filters={noUnassignedFilters} />
    )
    const noneAvailableFilters = getByPlaceholderText('Filter List')
    fireEvent.click(noneAvailableFilters)
    expect(document.activeElement === noneAvailableFilters).toBeTruthy()
    expect(queryByText('Name')).not.toBeInTheDocument()
    expect(queryByText('No options')).toBeInTheDocument()
    expect(queryByText('admin')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('render InputFilter with only assignedFilters', () => {
    const { getByPlaceholderText, queryByText } = renderWithTheme(
      <InputFilters filters={noAssignedFilters} />
    )
    const noneAvailableFilters = getByPlaceholderText('Filter List')
    fireEvent.click(noneAvailableFilters)
    expect(document.activeElement === noneAvailableFilters).toBeTruthy()
    expect(queryByText('Name')).toBeInTheDocument()
    expect(queryByText('admin')).not.toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('InputFilter displays chips for each FieldFilter passed', () => {
    const { queryByText } = renderWithTheme(<InputFilters filters={filters} />)
    expect(queryByText('admin')).toBeInTheDocument()
    expect(queryByText('pizza-lovers')).toBeInTheDocument()
  })

  test('InputFilter displays the right list of filters', () => {
    const { getByPlaceholderText, queryByText } = renderWithTheme(
      <InputFilters filters={filters} />
    )
    const activeFilter = getByPlaceholderText('Filter List')
    fireEvent.click(activeFilter)
    expect(document.activeElement === activeFilter).toBeTruthy()
    expect(queryByText('Name')).toBeInTheDocument()
    expect(queryByText('model')).toBeInTheDocument()
    expect(queryByText('trigger')).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })
})
