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

import React, { useState, ReactNode } from 'react'
import { ActionListDatum, ActionListData, doDefaultActionListSort } from '.'
import {
  ActionList,
  ActionListColumns,
  ActionListItem,
  ActionListItemColumn,
} from '..'

export const useActionListSortManager = (
  actionListData: ActionListData,
  actionListColumns: ActionListColumns,
  generateActions: (item: ActionListDatum) => ReactNode
) => {
  const [data, setData] = useState(actionListData)
  const [columns, setColumns] = useState(actionListColumns)

  const onSort = (id: string, sortDirection: 'asc' | 'desc') => {
    const {
      columns: sortedColumns,
      data: sortedData,
    } = doDefaultActionListSort(data, columns, id, sortDirection)
    setData(sortedData)
    setColumns(sortedColumns)
  }

  const items = data.map((dataObj) => {
    const assumedPrimaryKey = columns[0].id

    return (
      <ActionListItem
        key={dataObj[assumedPrimaryKey]}
        onClick={() => alert(`Row clicked`)}
        actions={generateActions(dataObj)}
      >
        {columns.map((column) => (
          <ActionListItemColumn key={column.id}>
            {dataObj[column.id]}
          </ActionListItemColumn>
        ))}
      </ActionListItem>
    )
  })

  return (
    <ActionList columns={columns} onSort={onSort}>
      {items}
    </ActionList>
  )
}
