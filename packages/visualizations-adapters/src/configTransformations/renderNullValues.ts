/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CLine } from '../adapters'
import type { ConfigHelper } from '../types'

/**
 * Sets default render_null_values value to false
 * When false, null values should render gaps in the relevant charts.
 */
export const renderNullValues: ConfigHelper<CLine> = ({
  config,
  data,
  fields,
}) => {
  const { render_null_values = false, ...restConfig } = config
  return {
    config: {
      render_null_values,
      ...restConfig,
    },
    data,
    fields,
  }
}
