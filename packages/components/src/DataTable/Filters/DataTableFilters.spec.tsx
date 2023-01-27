/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { InputFilters } from '../../Form'
import { columns } from '../../fixtures/DataTable/columns'
import { filters } from '../../fixtures/filters'
import { DataTableFilters } from './DataTableFilters'

describe('DataTableFilters', () => {
  test('render and displays InputFilter', () => {
    renderWithTheme(
      <DataTableFilters
        columns={columns}
        columnsVisible={[]}
        onColumnVisibilityChange={jest.fn()}
      >
        <InputFilters filters={filters} onChange={jest.fn()} />
      </DataTableFilters>
    )

    expect(screen.getByPlaceholderText('Filter List')).toBeInTheDocument()
  })

  test('render display columns icon', () => {
    renderWithTheme(
      <DataTableFilters
        columns={columns}
        columnsVisible={[]}
        onColumnVisibilityChange={jest.fn()}
      >
        <InputFilters filters={filters} onChange={jest.fn()} />
      </DataTableFilters>
    )
    expect(screen.getByText('Select columns to display')).toBeInTheDocument()
  })
})
