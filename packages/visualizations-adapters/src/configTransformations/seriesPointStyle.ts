/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import get from 'lodash/get'
import set from 'lodash/set'
import type { CArea, CLine, CLineSeries } from '../adapters'
import type { ConfigHelper, RawApiConfigResponse } from '../types'
import { getMeasureNames } from '../utils'

/**
 * Populate point style from raw api response.
 * Multiple point styles are not supported by the api. Sets all series
 * to match point_style when it's not othrewise set. Works for both array and
 * named series objects.
 */
export const seriesPointStyle: ConfigHelper<CLine | CArea> = ({
  config,
  data,
  fields,
}) => {
  const { type, point_style: _point_style, series = {}, ...restConfig } = config

  type PointStyleValues = CLineSeries['style']
  type AllKeys = RawApiConfigResponse['point_style'] & PointStyleValues & ''

  const POINT_STYLE: Record<AllKeys, PointStyleValues> = {
    '': 'filled',
    circle: 'filled',
    circle_outline: 'outline',
    filled: 'filled',
    outline: 'outline',
    // scatter plots can't have point style set to "none"
    ...(type !== 'scatter' ? { none: 'none' } : { none: 'filled' }),
  }

  const normalizedPointStyle =
    POINT_STYLE[(config.point_style || '') as AllKeys]

  const measures = getMeasureNames(fields)

  const buildArraySeries = (s: CLineSeries[] = []) => {
    const arraySeries = [...s]
    for (let i = 0; i < measures.length; i++) {
      const { style = normalizedPointStyle } = arraySeries[i] || {}
      set(arraySeries, [i, 'style'], style)
    }
    return arraySeries
  }

  const buildNamedSeries = (s: { [k: string]: CLineSeries }) => {
    const namedSeries = { ...s }
    for (const field of measures) {
      const style = get(namedSeries, [field, 'style'], normalizedPointStyle)
      set(namedSeries, [field, 'style'], style)
    }
    return namedSeries
  }

  return {
    config: {
      series: Array.isArray(series)
        ? buildArraySeries(series)
        : buildNamedSeries(series),
      type,
      ...restConfig,
    },
    data,
    fields,
  }
}
