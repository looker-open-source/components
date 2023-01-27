/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { SDKRecord } from '../types'
import { isNumeric } from './isNumeric'

/**
 * Returns the smallest numeric value from a data array for a specific series
 *
 * Used by Scatter chart to calibrate the size-by functionality
 */
export const getSeriesMin = (seriesName: string, data: SDKRecord[]) => {
  const values = data.map((d) => {
    const val = d[seriesName]
    return isNumeric(val) ? Number(val) : Infinity
  })

  const minVal = Math.min(...values)

  // default to zero in cases where all values were not numeric
  return minVal === Infinity ? 0 : minVal
}
