/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React from 'react'
import { DataTable } from '../DataTable'
import { DataTableItem } from '../Item'
import type { DataTableColumns } from '../Column'
import { DataTableCell } from '../Column'
import type { DataTableData } from './sort_utils'

export const useDataTable = (
  data: DataTableData,
  columns: DataTableColumns,
  caption: string
) => {
  const items = data.map(dataObj => {
    const defaultOrderColumn = columns[0].id
    const id = dataObj[defaultOrderColumn]

    return (
      <DataTableItem id={id} key={id}>
        {columns.map(column => (
          <DataTableCell key={column.id}>{dataObj[column.id]}</DataTableCell>
        ))}
      </DataTableItem>
    )
  })

  return (
    <DataTable caption={caption} columns={columns}>
      {items}
    </DataTable>
  )
}
