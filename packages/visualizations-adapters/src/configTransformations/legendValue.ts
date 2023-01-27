/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { CPie } from '../adapters'
import type { ConfigHelper, LegendValues, RawApiConfigResponse } from '../types'

/**
 * Set the value that you want to appear in the legend.
 * Sets 'label' by default.
 */
export const legendValue: ConfigHelper<CPie> = ({ config, data, fields }) => {
  type AllKeys = RawApiConfigResponse['label_type'] & LegendValues & ''

  const LEGEND_VALUE: Record<AllKeys, LegendValues> = {
    '': 'label_percent',
    lab: 'label',
    label: 'label',
    labPer: 'label_percent',
    label_percent: 'label_percent',
    labVal: 'label_value',
    label_value: 'label_value',
    per: 'percent',
    percent: 'percent',
    val: 'value',
    value: 'value',
  }

  const { label_type, legend, ...restConfig } = config

  const legendValue =
    LEGEND_VALUE[((legend && legend.value) || label_type || '') as AllKeys]

  return {
    config: {
      legend:
        legend === false
          ? false
          : {
              ...legend,
              value: legendValue,
            },
      ...restConfig,
    },
    data,
    fields,
  }
}
