/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
import set from 'lodash/set'
import type {
  ConfigHelper,
  CommonCartesianProperties,
  CSeriesBasic,
} from '../types'
import { getMeasureNames } from '../utils'

export const fallbackSeriesColors = [
  '#6c43e0',
  '#b73ec3',
  '#db4da8',
  '#ed6995',
  '#f1898f',
]

/**
 * Populate series colors from series_colors response.
 * Can merge default values with either array or named object
 */
export const seriesColors: ConfigHelper<CommonCartesianProperties> = ({
  config,
  fields,
}) => {
  const { series_colors, series = {}, custom_color, ...restConfig } = config
  if (typeof custom_color === 'string')
    fallbackSeriesColors.unshift(custom_color)
  const measures = getMeasureNames(fields)
  const defaultColors = measures
    .map((field, currentIndex) => {
      return series_colors?.[field] || fallbackSeriesColors[currentIndex]
    })
    .filter(Boolean)
  const buildArraySeries = (s: CSeriesBasic[] = []) => {
    // merge color array into existing series array
    const arraySeries = [...s]
    for (let i = 0; i < measures.length; i++) {
      while (defaultColors.length) {
        const color = defaultColors.shift()
        const duplicateColor =
          arraySeries.findIndex(element => element.color === color) > -1
        if (color && !duplicateColor) {
          if (typeof arraySeries[i]?.color === 'string') {
            // this element already has color property. try again on the next iteration
            defaultColors.unshift(color)
          } else {
            set(arraySeries, [i, 'color'], color)
          }
          break
        }
      }
    }
    return arraySeries
  }

  const buildNamedSeries = (s: { [k: string]: CSeriesBasic }) => {
    // merge named color objects
    const namedSeries = measures.reduce((seriesConfig, field, currentIndex) => {
      const currentFieldSettings = pick(s, field)
      const defaultSeriesColor = {
        [field]: {
          color: series_colors?.[field] || fallbackSeriesColors[currentIndex],
        },
      }
      return merge(seriesConfig, defaultSeriesColor, currentFieldSettings)
    }, {} as { [key: string]: CSeriesBasic })
    return namedSeries
  }

  return {
    config: {
      series: Array.isArray(series)
        ? buildArraySeries(series)
        : buildNamedSeries(series),
      ...restConfig,
    },
    fields,
  }
}
