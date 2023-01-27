/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import React, { useState } from 'react'
import {
  DataTableAction,
  DataTableItem,
  DataTableCell,
  DataTable,
  DateFormat,
  doDataTableSort,
} from '../..'
import type { DataTableColumns } from '../../'

export default function Sorting() {
  const [data, setData] = useState([
    {
      createdDate: new Date('11/11/2001'),
      id: 1,
      name: 'Gorgonzola',
    },
    {
      createdDate: new Date('03/15/2001'),
      id: 2,
      name: 'Cheddar',
    },
    {
      createdDate: new Date('07/20/2001'),
      id: 3,
      name: `Blue`,
    },
  ])

  const [columns, setColumns] = useState<DataTableColumns>([
    {
      canSort: true,
      id: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      canSort: true,
      id: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      canSort: true,
      id: 'createdDate',
      size: 'nowrap',
      title: 'Created Date',
      type: 'date',
    },
  ])

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

  const items = data.map(({ id, name, createdDate }) => {
    const actions = (
      <>
        <DataTableAction onClick={() => alert(`${name} selected!`)}>
          Select Cheese
        </DataTableAction>
      </>
    )

    return (
      <DataTableItem
        id={`${id}`}
        key={id}
        onClick={() => alert('Row clicked')}
        actions={actions}
      >
        <DataTableCell>{id}</DataTableCell>
        <DataTableCell>{name}</DataTableCell>
        <DataTableCell>
          <DateFormat>{createdDate}</DateFormat>
        </DataTableCell>
      </DataTableItem>
    )
  })

  return (
    <DataTable caption="Cheeses example" onSort={onSort} columns={columns}>
      {items}
    </DataTable>
  )
}
