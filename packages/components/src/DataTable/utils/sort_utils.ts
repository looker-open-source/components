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

import { DataTableColumns } from '../Column'

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

export type DataTableDatum = Record<string, any>
export type DataTableData = DataTableDatum[]

export const doDefaultDataTableSort = <T>(
  data: T[],
  columns: DataTableColumns,
  id: string,
  sortDirection: 'asc' | 'desc'
) => {
  const sortedData = [...data]
  const updatedColumns = [...columns]
  const targetColumn = updatedColumns.find((column) => column.id === id)

  // The default sort behavior only allows for one column to appear sorted at a time
  // Using delete operator to clean out all sortDirection properties in our columns array
  columns.forEach((column) => delete column.sortDirection)
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
    data: sortedData,
  }
}
