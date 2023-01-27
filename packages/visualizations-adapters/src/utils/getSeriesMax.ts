/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { SDKRecord } from '../types'
import { isNumeric } from './isNumeric'

/**
 * Returns the greatest numeric value from a data array for a specific series
 *
 * Used by Scatter chart to calibrate the size-by functionality
 */
export const getSeriesMax = (seriesName: string, data: SDKRecord[]) => {
  const values = data.map((d) => {
    const val = d[seriesName]
    return isNumeric(val) ? Number(val) : -Infinity
  })

  const maxVal = Math.max(...values)

  // default to zero for cases where none of the values were numeric
  return maxVal === -Infinity ? 0 : maxVal
}
