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
