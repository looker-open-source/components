/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CTable } from '../adapters'
import type { ConfigHelper } from '../types'

/**
 * Sets default totals value to true
 */
export const showTotals: ConfigHelper<CTable> = ({ config, data, fields }) => {
  const { hide_totals = false, ...restConfig } = config
  const show_totals = !hide_totals
  return {
    config: {
      show_totals,
      ...restConfig,
    },
    data,
    fields,
  }
}
