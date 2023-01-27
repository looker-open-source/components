/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import set from 'lodash/set'
import type { CArea, CLine, CLineSeries } from '../adapters'
import type { ConfigHelper } from '../types'
import { getMeasureNames } from '../utils'

/**
 * Set default line width when not otherwise set.
 * There is no equivalent value from the api response.
 */
export const seriesLineWidth: ConfigHelper<CLine | CArea> = ({
  config,
  data,
  fields,
}) => {
  const { series = {}, ...restConfig } = config
  const measures = getMeasureNames(fields)

  const buildArraySeries = (s: CLineSeries[] = []) => {
    const arraySeries = [...s]
    for (let i = 0; i < measures.length; i++) {
      const { line_width = 3 } = arraySeries[i] || {}
      set(arraySeries, [i, 'line_width'], line_width)
    }
    return arraySeries
  }

  const buildNamedSeries = (s: { [k: string]: CLineSeries }) => {
    const namedSeries = { ...s }
    for (const field of measures) {
      const { line_width = 3 } = namedSeries[field] || {}
      set(namedSeries, [field, 'line_width'], line_width)
    }
    return namedSeries
  }

  return {
    config: {
      series: Array.isArray(series)
        ? buildArraySeries(series)
        : buildNamedSeries(series),
      ...restConfig,
    },
    data,
    fields,
  }
}
