/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { MouseEvent, ReactNode } from 'react'
import React, { useState } from 'react'
import { DataTable } from '../DataTable'
import { DataTableItem } from '../Item'
import type { DataTableColumns } from '../Column'
import { DataTableCell } from '../Column'
import { doDataTableSort } from './sort_utils'
import type { DataTableDatum, DataTableData } from './sort_utils'

export const useDataTableSortManager = (
  caption: string,
  defaultData: DataTableData,
  defaultColumns: DataTableColumns,
  generateActions: (item: DataTableDatum) => ReactNode,
  onClickItem?: (e: MouseEvent<HTMLTableDataCellElement>) => void
) => {
  const [data, setData] = useState(defaultData)
  const [columns, setColumns] = useState(defaultColumns)

  const onSort = (id: string, sortDirection: 'asc' | 'desc') => {
    const { columns: sortedColumns, data: sortedData } = doDataTableSort(
      data,
      columns,
      id,
      sortDirection
    )
    setData(sortedData)
    setColumns(sortedColumns)
  }

  const items = data.map(dataObj => {
    const defaultOrderColumn = columns[0].id
    const id = dataObj[defaultOrderColumn]

    return (
      <DataTableItem
        id={id}
        key={id}
        onClick={onClickItem}
        actions={generateActions(dataObj)}
      >
        {columns.map(column => (
          <DataTableCell key={column.id}>{dataObj[column.id]}</DataTableCell>
        ))}
      </DataTableItem>
    )
  })

  return (
    <DataTable caption={caption} columns={columns} onSort={onSort}>
      {items}
    </DataTable>
  )
}
