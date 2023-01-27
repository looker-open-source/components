/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import { DataTableItem, DataTableCell, DataTable } from '../..'
import type { DataTableColumns } from '../../'

export default function State() {
  const columns: DataTableColumns = [
    {
      id: 'name',
      title: 'Name',
      type: 'string',
    },
  ]

  // Change state to "noResults" to render the noResultsDisplay
  return (
    <DataTable caption="Cheeses example" columns={columns} state="noResults">
      <DataTableItem id={'cheddar'} onClick={() => alert(`Row clicked`)}>
        <DataTableCell>Cheddar</DataTableCell>
      </DataTableItem>
    </DataTable>
  )
}
