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

import type { SDKRecord, TableProps } from '@looker/visualizations-adapters'
import type { ColumnDef } from '@tanstack/table-core'
import {
  buildDimensionColumns,
  buildMeasureColumns,
  nestPivotedFields,
} from '.'

type GroupedColumnProps = Required<
  Pick<TableProps, 'fields' | 'pivots' | 'config'>
>

/**
 * Configures nested/grouped table headers
 * which are displayed for pivoted queries.
 * @param props: fields and pivots metadata
 * @returns nested column configuration for tanstack table
 */

export const buildGroupedColumns = (
  props: GroupedColumnProps
): ColumnDef<SDKRecord>[] => {
  const { fields, pivots, config } = props

  // Header rows are rendered last-to-first from the pivots array,
  // so must be reversed before beginning render process.
  const reversedPivots = [...(fields.pivots || [])].reverse()

  const dimensionColumns = buildDimensionColumns(fields.dimensions)

  const nestedDimensions = nestPivotedFields({
    pivotList: reversedPivots,
    pivotIndex: 0,
    nestedPivots: dimensionColumns,
  })

  const measureColumns = buildMeasureColumns(fields.measures, config)

  const nestedMeasures = Object.entries(measureColumns).reduce<
    ColumnDef<SDKRecord>[]
  >((groups, [pivotKey, measures]) => {
    const pivot = pivots.find(p => p.key === pivotKey)
    const columnGroups = nestPivotedFields({
      pivotList: reversedPivots,
      pivotIndex: 0,
      nestedPivots: measures,
      pivotValues: pivot,
    })
    return [...groups, columnGroups]
  }, [])

  return [nestedDimensions, ...nestedMeasures]
}
