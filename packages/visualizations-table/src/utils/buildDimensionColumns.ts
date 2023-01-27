/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  DimensionMetadata,
  SDKRecord,
} from '@looker/visualizations-adapters'
import type { ColumnDef } from '@tanstack/table-core'

/**
 * Renders dimension columns from fields.dimensions response.
 * @param dimensions: an array of dimension metadata
 * @returns
 */
export const buildDimensionColumns = (
  dimensions: DimensionMetadata[]
): ColumnDef<SDKRecord>[] => {
  return dimensions.map(dimension => {
    return {
      header: dimension.label,
      accessorFn: (data: SDKRecord) => data[dimension.name],
      id: dimension.name,
    }
  })
}
