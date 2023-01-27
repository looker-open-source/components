/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import merge from 'lodash/merge'
import pick from 'lodash/pick'
import type { CArea, CLine, CLineSeries } from '../adapters'
import type { ConfigHelper } from '../types'
import { getMeasureNames } from '../utils'

/**
 * Populate series point shapes from series_point_styles response.
 * Merges with named series settings, and sets all array elements to 'circle' unless already set.
 */
export const seriesPointShape: ConfigHelper<CLine | CArea> = ({
  config,
  data,
  fields,
}) => {
  const { series_point_styles, series = {}, ...restConfig } = config
  const measures = getMeasureNames(fields)

  const buildArraySeries = (s: CLineSeries[] = []) => {
    const arraySeries = [...s]
    for (let i = 0; i < measures.length; i++) {
      arraySeries[i] = merge({ shape: 'circle' }, arraySeries[i] || {})
    }
    return arraySeries
  }

  const buildNamedSeries = (s: { [k: string]: CLineSeries }) => {
    const namedSeries = measures.reduce((seriesConfig, field) => {
      const shape = series_point_styles?.[field]
      const currentFieldSettings = pick(s, field)
      const DEFAULT_SERIES_SHAPE = {
        [field]: { shape: !shape || shape === 'automatic' ? 'circle' : shape },
      }
      return merge(seriesConfig, DEFAULT_SERIES_SHAPE, currentFieldSettings)
    }, {} as { [key: string]: CLineSeries })
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
