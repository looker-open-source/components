/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  SDKRecord,
  CTable,
  MeasureMetadata,
} from '@looker/visualizations-adapters'
import type { ColumnDef } from '@tanstack/table-core'

/**
 * Renders dimension columns from fields.dimensions response.
 * @param measures: an array of measure metadata
 * @param config: vis config object
 * @returns A list of measures which are grouped by their pivot key name where applicable.
 */
export const buildMeasureColumns = (
  measures: MeasureMetadata[],
  config: CTable
): Record<string, ColumnDef<SDKRecord>[]> => {
  return measures.reduce<Record<string, ColumnDef<SDKRecord>[]>>(
    (cols, measure, i) => {
      const pivotKey = measure.pivot_key || ''
      const group = cols[pivotKey] || []
      const seriesConfig = {
        ...measure,
        ...(Array.isArray(config.series)
          ? config.series[i]
          : config.series?.[measure.name]),
      }

      return {
        ...cols,
        [pivotKey]: [
          ...group,
          {
            header: seriesConfig.label,
            accessorFn: (data: SDKRecord) => data[measure.name],
            id: measure.name,
          },
        ],
      }
    },
    {}
  )
}
