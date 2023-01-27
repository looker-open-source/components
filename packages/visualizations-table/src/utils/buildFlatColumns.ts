/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { SDKRecord, TableProps } from '@looker/visualizations-adapters'
import type { ColumnDef } from '@tanstack/table-core'
import { buildDimensionColumns, buildMeasureColumns } from '.'

type FlatColumnsProps = Pick<TableProps, 'config' | 'fields'>

/**
 * Renders a flat array of column definitions to render
 * a single header row. For use with non-pivoted queries.
 *
 * @param {Object} props
 * @param {Object} props.fields - Fields configuration from the sdk response
 * @param {Object} props.config - A vis config object
 * @returns an array of column configured for use with tanstack table
 */

export const buildFlatColumns = ({
  fields,
  config,
}: FlatColumnsProps): ColumnDef<SDKRecord>[] => {
  return [
    ...buildDimensionColumns(fields.dimensions),
    ...Object.values(buildMeasureColumns(fields.measures, config)).flat(),
  ]
}
