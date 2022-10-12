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
import { useState, useCallback } from 'react'
import type { MouseEvent } from 'react'
import type { SDKRecord, TableProps } from '@looker/visualizations-adapters'
import type { SortingState, Header } from '@tanstack/table-core'
import {
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from '@tanstack/react-table'
import noop from 'lodash/noop'
import { buildFlatColumns, buildGroupedColumns } from '../utils'

type UseHeadlessTableProps = Pick<
  TableProps,
  'data' | 'config' | 'fields' | 'pivots'
>

const isPivotedQuery = (
  props: UseHeadlessTableProps
): props is Required<UseHeadlessTableProps> => {
  return !!props.fields.pivots?.length && !!props.pivots?.length
}

/**
 * useHeadlessTable configures our headless table dependency. Handles
 * basic table state and sorting logic.
 */

export const useHeadlessTable = (props: UseHeadlessTableProps) => {
  const { data, config, fields } = props

  const { column_order, show_row_totals = true, series = {} } = config

  const flatFields = [...fields.dimensions, ...fields.measures]

  const columns = isPivotedQuery(props)
    ? buildGroupedColumns(props)
    : buildFlatColumns(props)

  const [sorting, setSorting] = useState<SortingState>(
    flatFields
      .sort((field1, field2) => {
        const sortIndex1 = field1.sorted?.sort_index || -1
        const sortIndex2 = field2.sorted?.sort_index || -1
        return sortIndex1 - sortIndex2
      })
      .map(field => {
        if (field.sorted) {
          return { id: field.name, desc: field.sorted.desc }
        }
        return undefined
      })
      .filter(Boolean) as SortingState
  )

  const handleTableSort = useCallback(
    (header: Header<SDKRecord, unknown>, e: MouseEvent<Element>) => {
      if (header?.column?.getCanSort()) {
        const currentSortingIndex = sorting.findIndex(
          column => column.id === header.id
        )

        const currentDesc = !!sorting[currentSortingIndex]?.desc

        const draftColumnConfig = { id: header.id, desc: !currentDesc }

        if (e.shiftKey) {
          // sort multiple columns when shift key is pressed
          const draftSorting = [...sorting]
          if (currentSortingIndex >= 0) {
            // update element at index
            draftSorting[currentSortingIndex] = draftColumnConfig
          } else {
            // append new sort element to list
            draftSorting.push(draftColumnConfig)
          }
          setSorting(draftSorting)
        } else {
          setSorting([draftColumnConfig])
        }
      }
    },
    [sorting]
  )

  const columnVisibility = fields.measures.reduce<Record<string, boolean>>(
    (acc, { name }, i) => {
      const seriesConfig = Array.isArray(series) ? series[i] : series[name]
      if (name.includes('$$$_row_total_$$$')) {
        acc[name] = show_row_totals
        return acc
      } else {
        acc[name] = seriesConfig?.visible ?? true
        return acc
      }
    },
    {}
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      columnOrder: column_order,
      columnPinning: { left: [], right: [] },
      sorting,
      columnVisibility,
    },
    onStateChange: noop,
    renderFallbackValue: null,
  })

  return { table, sorting, handleTableSort }
}
