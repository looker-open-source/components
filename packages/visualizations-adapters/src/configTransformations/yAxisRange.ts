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

import type { ConfigHelper, YAxisConfig, YAxisRaw } from '../types'
import type { CSparkline } from '../adapters'
import omitBy from 'lodash/omitBy'
import isNull from 'lodash/isNull'

/**
 * Transformation sets ONLY the range values for y-axis config object.
 * Created for use in Sparkline where the y-axis options are much simpler than
 * other cartesian charts.
 */
export const yAxisRange: ConfigHelper<CSparkline> = ({
  config,
  data,
  fields,
}) => {
  const {
    y_axes: y_axis_raw = [{}] as YAxisRaw[], // default object from SDK
    y_axis = [{}] as YAxisConfig[], // officially supported config
    ...restConfig
  } = config

  const longestListLength = Math.max(y_axis_raw.length, y_axis.length)
  const yAxisWithDefaults: YAxisConfig[] = []

  for (let i = 0; i < longestListLength; i++) {
    const rawAxisAtPosition = omitBy(y_axis_raw[i] || {}, isNull)
    const officialAxisAtPosition = y_axis[i] || {}

    // raw sdk attributes
    const { minValue, maxValue } = rawAxisAtPosition

    // officially supported config values, falling back to raw sdk attributes
    const {
      range = [
        minValue === undefined ? 'auto' : minValue,
        maxValue === undefined ? 'auto' : maxValue,
      ],
    } = officialAxisAtPosition

    yAxisWithDefaults[i] = { ...officialAxisAtPosition, range }
  }

  return {
    config: {
      ...restConfig,
      y_axis: yAxisWithDefaults,
    },
    data,
    fields,
  }
}
