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
