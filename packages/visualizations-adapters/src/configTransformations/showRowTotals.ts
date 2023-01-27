/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CTable } from '../adapters'
import type { ConfigHelper } from '../types'

/**
 * Sets default show_row_totals value to true
 */
export const showRowTotals: ConfigHelper<CTable> = ({
  config,
  data,
  fields,
}) => {
  const { hide_row_totals = false, ...restConfig } = config
  const show_row_totals = !hide_row_totals
  return {
    config: {
      show_row_totals,
      ...restConfig,
    },
    data,
    fields,
  }
}
