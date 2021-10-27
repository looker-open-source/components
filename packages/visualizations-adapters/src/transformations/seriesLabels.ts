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

import pick from 'lodash/pick'
import merge from 'lodash/merge'
import type {
  ConfigHelper,
  CommonCartesianProperties,
  CSeriesBasic,
} from '../types'
import { getMeasureNames } from '../utils'

/**
 * Populate series[name].label from series_labels response.
 * Only works with named series as an ordered array of labels would not
 * render accurately.
 */
export const seriesLabels: ConfigHelper<CommonCartesianProperties> = ({
  config,
  fields,
}) => {
  const { series_labels, series = {}, ...restConfig } = config

  const measures = getMeasureNames(fields)

  const buildNamedSeries = (s: { [k: string]: CSeriesBasic }) => {
    const namedSeries = measures.reduce((seriesConfig, field) => {
      const currentFieldSettings = pick(s, field)
      const defaultSeriesLabel = { [field]: { label: series_labels?.[field] } }
      return merge(seriesConfig, defaultSeriesLabel, currentFieldSettings)
    }, {} as { [key: string]: CSeriesBasic })

    return namedSeries
  }

  return {
    config: {
      series: Array.isArray(series) ? series : buildNamedSeries(series),
      ...restConfig,
    },
    fields,
  }
}
