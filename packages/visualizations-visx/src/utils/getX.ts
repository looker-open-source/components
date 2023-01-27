/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { SDKRecord } from '@looker/visualizations-adapters'

/**
 * Get X value from sdk data response
 *
 * @param d a single tabular formatted data point
 * @returns a number
 */

export const getX = (d: SDKRecord) => Object.values(d)[0]
