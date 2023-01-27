/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { ConfigHelper, YAxisConfig, YAxisRaw } from '../types'
import type { CSparkline } from '../adapters'
import omitBy from 'lodash/omitBy'
import isNull from 'lodash/isNull'

/**
 * Transformation sets ONLY the range values for y-axis config object.
 * Created for use in Sparkline where the y-axis options are much simpler than
 * other cartesian charts.
 */
export const yAxisRange: ConfigHelper<CSparkline> = ({
  config,
  data,
  fields,
}) => {
  const {
    y_axes: y_axis_raw = [{}] as YAxisRaw[], // default object from SDK
    y_axis = [{}] as YAxisConfig[], // officially supported config
    ...restConfig
  } = config

  const longestListLength = Math.max(y_axis_raw.length, y_axis.length)
  const yAxisWithDefaults: YAxisConfig[] = []

  for (let i = 0; i < longestListLength; i++) {
    const rawAxisAtPosition = omitBy(y_axis_raw[i] || {}, isNull)
    const officialAxisAtPosition = y_axis[i] || {}

    // raw sdk attributes
    const { minValue, maxValue } = rawAxisAtPosition

    // officially supported config values, falling back to raw sdk attributes
    const {
      range = [
        minValue === undefined ? 'auto' : minValue,
        maxValue === undefined ? 'auto' : maxValue,
      ],
    } = officialAxisAtPosition

    yAxisWithDefaults[i] = { ...officialAxisAtPosition, range }
  }

  return {
    config: {
      ...restConfig,
      y_axis: yAxisWithDefaults,
    },
    data,
    fields,
  }
}
