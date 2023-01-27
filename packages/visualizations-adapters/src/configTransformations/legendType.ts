/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CPie } from '../adapters'
import type { ConfigHelper } from '../types'

/**
 * Set legend type to either be 'legend' or 'labels'.
 * Sets 'legend' by default.
 */
export const legendType: ConfigHelper<CPie> = ({ config, data, fields }) => {
  const { value_labels, legend, ...restConfig } = config

  const LEGEND_TYPE = (legend && legend.type) || value_labels || 'legend'

  return {
    config: {
      legend:
        legend === false
          ? false
          : {
              ...legend,
              type: LEGEND_TYPE,
            },
      ...restConfig,
    },
    data,
    fields,
  }
}
