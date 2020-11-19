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

import React, { useState } from 'react'
import { DateFormat } from '../../DateFormat'
import {
  DataTableAction,
  doDataTableSort,
  DataTable,
  DataTableColumns,
  DataTableItem,
  DataTableCell,
} from '..'

interface MyDataShape {
  createdDate: Date
  id: number
  name: string
}

export const Sortable = () => {
  const [data, setData] = useState<MyDataShape[]>([
    {
      createdDate: new Date('01/01/2001'),
      id: 1,
      name: 'Lloyd Tabb',
    },
    {
      createdDate: new Date('12/12/2012'),
      id: 2,
      name: 'Ben Porterfield',
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
      size: 'nowrap',
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

  const items = data.map(({ id, name, createdDate }) => {
    const actions = (
      <>
        <DataTableAction onClick={() => alert(id)}>Check id</DataTableAction>
        <DataTableAction onClick={() => alert(name)}>
          Check name
        </DataTableAction>
      </>
    )

    return (
      <DataTableItem actions={actions} id={String(id)} key={id}>
        <DataTableCell>{id}</DataTableCell>
        <DataTableCell>{name}</DataTableCell>
        <DataTableCell>
          <DateFormat>{createdDate}</DateFormat>
        </DataTableCell>
      </DataTableItem>
    )
  })

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

  return (
    <DataTable onSort={onSort} columns={columns}>
      {items}
    </DataTable>
  )
}
