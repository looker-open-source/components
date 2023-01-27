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
import React from 'react'
import type { SDKRecord, TableProps } from '@looker/visualizations-adapters'
import type { Table } from '@tanstack/react-table'
import get from 'lodash/get'
import numeral from 'numeral'
import { TableHeadCell } from '../TableHeadCell'
import type { useVirtual } from '../hooks'
import { useTranslation, normalizeHeaderColumns } from '../utils'

type ColumnTotalsProps = Pick<TableProps, 'config' | 'totals' | 'fields'> & {
  table: Table<SDKRecord>
  virtualizerAssets: ReturnType<typeof useVirtual>
}

/**
 * Conditionally renders the totals row in a data table
 * @param props: ColumnTotalsProps
 * @returns
 */

export const ColumnTotals = ({
  totals,
  config,
  fields,
  virtualizerAssets,
  table,
}: ColumnTotalsProps) => {
  const { OffsetLeft, virtualColumns } = virtualizerAssets

  const { t } = useTranslation('Table')

  const { show_totals, show_row_numbers, series = {} } = config

  const totalsText = t('Totals')

  const headerGroups = normalizeHeaderColumns(table)

  const lastHeaderRow = headerGroups.at(-1)?.headers

  return show_totals && totals && lastHeaderRow ? (
    <tr>
      <OffsetLeft />

      {/* 
        UX optimization: show sticky "totals" label when the sticky 
        row numbers column is visible.
      */}
      {show_row_numbers ? (
        <TableHeadCell stickyLeft>{totalsText}</TableHeadCell>
      ) : undefined}

      {virtualColumns.map(({ index: columnIndex }) => {
        const header = lastHeaderRow[columnIndex]
        if (!show_row_numbers && columnIndex === 0) {
          /* Render static (not sticky) row label when row numbers are hidden */
          return <TableHeadCell key="totals-label">{totalsText}</TableHeadCell>
        } else if (header && columnIndex >= 0) {
          const measureIndex = fields.measures.findIndex(
            m => m.name === header.id
          )

          const valueFormat = Array.isArray(series)
            ? get(series, [measureIndex, 'value_format'])
            : get(series, [header.id, 'value_format'])

          return (
            <TableHeadCell key={`${header.id || null}-foot`}>
              {valueFormat
                ? numeral(Number(totals[header.id])).format(valueFormat)
                : totals[header.id] || null}
            </TableHeadCell>
          )
        }
        return null
      })}
    </tr>
  ) : null
}
