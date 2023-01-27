/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { SDKRecord } from '@looker/visualizations-adapters'

/**
 * Get X value from sdk data response
 *
 * @param d a single tabular formatted data point
 * @param i is the position in the data response hash
 * @returns a number
 */

export const getY = (d: SDKRecord, i: number) => {
  const values = Object.values(d)
  return values[i + 1]
}
