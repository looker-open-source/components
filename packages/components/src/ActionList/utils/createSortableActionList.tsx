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

import React from 'react'
import {
  ActionList,
  ActionListColumns,
  ActionListItem,
  ActionListItemColumn,
  ActionListItemAction,
} from '..'

export const createSortableActionList = (
  data: any[],
  setData: (newData: any[]) => void,
  columns: ActionListColumns,
  setColumns: (newColumns: ActionListColumns) => void
) => {
  const MyActions = () => (
    <>
      <ActionListItemAction onClick={() => alert(`You performed an action!`)}>
        Some Action
      </ActionListItemAction>
    </>
  )

  const doSort = (id: string, sortDirection: 'asc' | 'desc') => {
    const sortedData = [...data]
    const updatedColumns = [...columns]
    const targetColumn = updatedColumns.find(column => column.id === id)

    // The default sort behavior only allows for one column to appear sorted at a time
    // Using delete operator to clean out all sortDirection properties in our columns array
    columns.forEach(column => delete column.sortDirection)

    const stringComparator = (stringA: string, stringB: string) => {
      const upperCasedStringA = stringA.toUpperCase()
      const upperCasedStringB = stringB.toUpperCase()

      if (upperCasedStringA < upperCasedStringB) return -1
      if (upperCasedStringA > upperCasedStringB) return 1
      return 0
    }

    if (targetColumn?.type === 'number') {
      if (sortDirection === 'desc') {
        sortedData.sort((a, b) => b[id] - a[id])
        targetColumn.sortDirection = 'desc'
      } else {
        sortedData.sort((a, b) => a[id] - b[id])
        targetColumn.sortDirection = 'asc'
      }
    } else if (targetColumn?.type === 'string') {
      if (sortDirection === 'desc') {
        sortedData.sort((a, b) => stringComparator(b[id], a[id]))
        targetColumn.sortDirection = 'desc'
      } else {
        sortedData.sort((a, b) => stringComparator(a[id], b[id]))
        targetColumn.sortDirection = 'asc'
      }
    }

    setData(sortedData)
    setColumns(updatedColumns)
  }

  const items = data.map(dataObj => {
    const assumedPrimaryKey = columns[0].id

    return (
      <ActionListItem
        key={dataObj[assumedPrimaryKey]}
        onClick={() => alert(`Row clicked`)}
        actions={<MyActions />}
      >
        {columns.map(column => (
          <ActionListItemColumn key={column.id}>
            {dataObj[column.id]}
          </ActionListItemColumn>
        ))}
      </ActionListItem>
    )
  })

  return (
    <ActionList columns={columns} doSort={doSort}>
      {items}
    </ActionList>
  )
}
