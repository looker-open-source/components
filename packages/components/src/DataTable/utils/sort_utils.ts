/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { DataTableColumns } from '../Column'

export const stringComparator = (stringA: string, stringB: string) => {
  const upperCasedStringA = stringA.toUpperCase()
  const upperCasedStringB = stringB.toUpperCase()

  if (upperCasedStringA < upperCasedStringB) return -1
  if (upperCasedStringA > upperCasedStringB) return 1
  return 0
}

export const dateComparator = (dateA: Date, dateB: Date) => {
  if (dateA < dateB) return -1
  if (dateA > dateB) return 1
  return 0
}

// Guy Ellis 2022-09-23 - The data table sorting is based on a DataTableColumnType which is either undefined or
// one of "string" | "number" | "date". The comparator in the sort method is based on the data type.
// However, there is no strong typing between the data and the "type". In other words, even if the
// type says "number" we have no TypeScript verifiable way to ensure that the associated data is a number.
// Of course, we can do type narrowing at each instance usage but that would then risk unanticipated runtime
// errors if there were a non-match that still currently provided the user with some functionality even though
// that might not be perfectly correct.
// At some point in the future we might want to split doDataTableSort() into 3 methods that each operate on a
// given data type or we might want to pass the comparator() method as a parameter. This would allow up to
// remove the no-explicit-any disable. b/201417582
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DataTableDatum = Record<string, any>
export type DataTableData = DataTableDatum[]

export const doDataTableSort = <T>(
  data: T[],
  columns: DataTableColumns,
  id: string,
  sortDirection: 'asc' | 'desc'
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sortedData: Array<{ [key: string]: any }> = [...data]
  const updatedColumns = [...columns]
  const targetColumn = updatedColumns.find(column => column.id === id)

  // The default sort behavior only allows for one column to appear sorted at a time
  // Using delete operator to clean out all sortDirection properties in our columns array
  columns.forEach(column => delete column.sortDirection)
  if (targetColumn) {
    if (targetColumn.type === 'number') {
      if (sortDirection === 'desc') {
        sortedData.sort((a, b) => b[id] - a[id])
      } else {
        sortedData.sort((a, b) => a[id] - b[id])
      }
    } else if (targetColumn.type === 'date') {
      if (sortDirection === 'desc') {
        sortedData.sort((a, b) => dateComparator(b[id], a[id]))
      } else {
        sortedData.sort((a, b) => dateComparator(a[id], b[id]))
      }
    } else {
      if (sortDirection === 'desc') {
        sortedData.sort((a, b) => stringComparator(b[id], a[id]))
      } else {
        sortedData.sort((a, b) => stringComparator(a[id], b[id]))
      }
    }
    targetColumn.sortDirection = sortDirection
  }

  return {
    columns: updatedColumns,
    data: sortedData as T[],
  }
}
