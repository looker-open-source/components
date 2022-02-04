/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

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
  const { type, point_style, series = {}, ...restConfig } = config

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
