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
