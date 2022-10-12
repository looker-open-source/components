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
