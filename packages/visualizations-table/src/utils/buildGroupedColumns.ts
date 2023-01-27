/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
