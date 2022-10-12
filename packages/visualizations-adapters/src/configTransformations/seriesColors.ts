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

import type {
  ConfigHelper,
  CommonCartesianProperties,
  CSeriesBasic,
} from '../types'
import { normalizePivotSeriesKeys } from '../utils'

/**
 * Populate series colors from series_colors response.
 * Can merge default values with either array or named object
 */
export const seriesColors: ConfigHelper<CommonCartesianProperties> = ({
  config,
  data,
  fields,
}) => {
  const {
    series_colors = {},
    series = {},
    custom_color,
    default_series_colors = [],
    ...restConfig
  } = config

  const seriesColors = normalizePivotSeriesKeys(series_colors)

  const seriesColorValues =
    fields?.measures?.map((measure) => {
      return seriesColors?.[measure.name]
    }) || []

  const colorSet = Array.from(
    new Set([...seriesColorValues, custom_color, ...default_series_colors])
  ).filter(Boolean)

  const buildArraySeries = (s: CSeriesBasic[] = []) => {
    // merge color array into existing series array
    const arraySeries = [...s]
    const defaultValues =
      fields?.measures?.map((_, i) => ({
        color: colorSet[i],
      })) || []

    for (let i = 0; i < defaultValues.length; i++) {
      arraySeries[i] = Object.assign({}, defaultValues[i], arraySeries[i])
    }

    return arraySeries
  }

  const buildNamedSeries = (s: { [k: string]: CSeriesBasic }) => {
    // merge named color objects
    const namedSeries = fields?.measures?.reduce((seriesConfig, measure, i) => {
      const { name: measureName } = measure
      const { color: currentColor, ...restSeries } = s[measureName] || {}

      return {
        ...seriesConfig,
        [measureName]: { ...restSeries, color: currentColor || colorSet[i] },
      }
    }, {} as { [key: string]: CSeriesBasic })
    return namedSeries
  }

  return {
    config: {
      series: Array.isArray(series)
        ? buildArraySeries(series)
        : buildNamedSeries(series),
      default_series_colors,
      ...restConfig,
    },
    data,
    fields,
  }
}
