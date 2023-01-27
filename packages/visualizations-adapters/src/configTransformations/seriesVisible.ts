/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import set from 'lodash/set'
import type {
  ConfigHelper,
  CSeriesBasic,
  CommonCartesianProperties,
} from '../types'
import { getMeasureNames } from '../utils'

/**
 * Populate series visibility from hidden_series response.
 * Only merges api visibility values for named series.
 * Array series fills default visibility:true when not otherwise set.
 */
export const seriesVisible: ConfigHelper<CommonCartesianProperties> = ({
  config,
  data,
  fields,
}) => {
  const {
    type,
    hidden_fields = [],
    series = {},
    plot_size_by_field,
    size_by_field,
    ...restConfig
  } = config
  const measures = getMeasureNames(fields)

  const buildArraySeries = (s: CSeriesBasic[] = []) => {
    const arraySeries = [...s]
    for (let i = 0; i < measures.length; i++) {
      const { visible: currentVisibility = true } = arraySeries[i] || {}
      set(arraySeries, [i, 'visible'], currentVisibility)
    }
    return arraySeries
  }

  const buildNamedSeries = (s: { [k: string]: CSeriesBasic }) => {
    const namedSeries = { ...s }
    for (const field of measures) {
      // For scatter charts, series used by the size_by behavior are hidden by default
      const defaultVisibility = !(
        (type === 'scatter' &&
          size_by_field === field &&
          !plot_size_by_field &&
          fields.measures.length > 1) ||
        hidden_fields.includes(field)
      )

      const { visible } = namedSeries[field]
      set(
        namedSeries,
        [field, 'visible'],
        typeof visible === 'boolean' ? visible : defaultVisibility
      )
    }
    return namedSeries
  }

  return {
    config: {
      series: Array.isArray(series)
        ? buildArraySeries(series)
        : buildNamedSeries(series),
      plot_size_by_field,
      size_by_field,
      type,
      ...restConfig,
    },
    data,
    fields,
  }
}
