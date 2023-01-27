/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent, screen } from '@testing-library/react'
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
    renderWithTheme(<InputFiltersChip filter={filter} onDelete={onDelete} />)
    expect(screen.getByText('role:')).toBeInTheDocument()
  })

  test('onClick', () => {
    const onClick = jest.fn()

    renderWithTheme(
      <InputFiltersChip filter={filter} onClick={onClick} onDelete={onDelete} />
    )
    const filterBy = screen.queryByText('role:')
    filterBy && fireEvent.click(filterBy)

    expect(filterBy).toBeInTheDocument()
    expect(onClick).toBeCalled()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })

  test('formats value if formatValue is passed', () => {
    renderWithTheme(<InputFiltersChip filter={filter} onDelete={onDelete} />)
    const filterBy = screen.queryByText('USER')

    expect(filterBy).toBeInTheDocument()

    // Close popover to silence act() warning
    fireEvent.click(document)
  })
})
