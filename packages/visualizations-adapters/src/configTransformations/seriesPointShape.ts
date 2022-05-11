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
