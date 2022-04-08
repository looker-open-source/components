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
import type { Fields, CCartesian } from '@looker/visualizations-adapters'
import {
  DEFAULT_STRING_FORMAT,
  DEFAULT_STRING_FORMAT_PERCENT,
} from '@looker/visualizations-adapters'

/**
 * Sets format of y-axis based on value_format property within config.series object
 *
 * @param config a configuration object
 * @returns a string for numeral to use to format
 */

export const getYAxisFormat = (config: CCartesian) => {
  const { series = {}, positioning = '' } = config
  const isPercent = positioning === 'percent'
  const isSingleSeries = !!(
    series.length === 1 || Object.keys(series).length === 1
  )
  if (isSingleSeries) {
    const valueFormat = Array.isArray(series)
      ? series[0].value_format
      : Object.values(series)[0].value_format
    return valueFormat
  } else {
    return isPercent ? DEFAULT_STRING_FORMAT_PERCENT : DEFAULT_STRING_FORMAT
  }
}

/**
 * Sets format of x-axis based on value_format property within fields.dimensions object
 *
 * @param fields a fields object
 * @returns a string for numeral to use to format
 */
export const getXAxisFormat = (fields: Fields) => {
  if (typeof fields === 'undefined') return ''

  const { dimensions = '' } = fields
  if (dimensions && dimensions.length === 1) {
    const { value_format } = dimensions[0]
    return value_format
  } else {
    return DEFAULT_STRING_FORMAT
  }
}
