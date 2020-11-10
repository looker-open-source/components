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
  DataTableAction,
  DataTableColumns,
  DataTableDatum,
  useDataTableSortManager,
} from '..'

export const Sortable = () => {
  const data = [
    {
      id: 1,
      name: 'Lloyd Tabb',
    },
    {
      id: 2,
      name: 'Ben Porterfield',
    },
  ]

  // Note: column objects must be tracked using state since their sortDirection properties will change
  // depending on which column is sorted
  const columns: DataTableColumns = [
    {
      canSort: true,
      id: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      canSort: true,
      id: 'name',
      size: 'large',
      title: 'Name (really long title to help keep things short-ish)',
      type: 'string',
    },
  ]

  const generateActions = (item: DataTableDatum) => {
    return (
      <>
        <DataTableAction onClick={() => alert(item.id)}>
          Check id
        </DataTableAction>
        <DataTableAction onClick={() => alert(item.name)}>
          Check name
        </DataTableAction>
      </>
    )
  }

  return useDataTableSortManager(data, columns, generateActions)
}
