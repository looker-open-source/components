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
import { deriveColorPalette } from '../utils'

const MAX_DATA_POINTS = 50

/**
 * An alternative to the seriesColors transformation, designed for Pie charts.
 * This function treats each dimension value as an individual series and assigns
 * a default color value.
 * Can merge default values with either array or named object
 */
export const dimensionSeriesColors: ConfigHelper<CommonCartesianProperties> = ({
  config,
  data,
  fields,
}) => {
  const {
    series_colors,
    series = {},
    custom_color,
    default_series_colors,
    ...restConfig
  } = config
  const fullColorPalette = deriveColorPalette(default_series_colors)

  const limitedData = data.slice(0, MAX_DATA_POINTS)

  const dimensionValues =
    fields?.dimensions
      ?.flatMap((dimension) => {
        return limitedData.map((data) => data[dimension.name])
      })
      .slice(0, MAX_DATA_POINTS) || []

  const buildArraySeries = (s: CSeriesBasic[] = []) => {
    // merge color array into existing series array
    const draftseries = dimensionValues.map((_, i) => {
      const defaultVal = {
        color: fullColorPalette[i],
      }
      return Object.assign({}, defaultVal, s[i])
    })

    return draftseries
  }

  const buildNamedSeries = (s: { [k: string]: CSeriesBasic }) => {
    // merge named color objects
    const namedSeries = dimensionValues.reduce((draftSeries, dimension, i) => {
      const currentValues = s[dimension] || {}
      const defaultVal = {
        color: series_colors?.[dimension] || fullColorPalette[i],
      }
      return {
        ...draftSeries,
        [dimension]: Object.assign({}, defaultVal, currentValues),
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
