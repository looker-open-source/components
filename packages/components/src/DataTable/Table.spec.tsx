/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Table } from './Table'

describe('DataTable/Table', () => {
  test('loading', () => {
    renderWithTheme(
      <Table caption="" columnsVisible={[]} columns={[]} state="loading">
        Stuff
      </Table>
    )
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })

  test('noResultsDisplay', () => {
    renderWithTheme(
      <Table
        caption=""
        columnsVisible={[]}
        columns={[]}
        state="noResults"
        noResultsDisplay="Nope, nothing to see here"
      >
        Stuff
      </Table>
    )
    expect(screen.getByText('Nope, nothing to see here')).toBeInTheDocument()
  })

  test('noResultsDisplay non-string', () => {
    renderWithTheme(
      <Table
        caption=""
        columnsVisible={[]}
        columns={[]}
        state="noResults"
        noResultsDisplay={<p>Nope, nothing to see here</p>}
      >
        Stuff
      </Table>
    )
    expect(screen.getByText('Nope, nothing to see here')).toBeInTheDocument()
  })
})
