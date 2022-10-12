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

import pick from 'lodash/pick'
import merge from 'lodash/merge'
import set from 'lodash/set'
import type {
  ConfigHelper,
  CommonCartesianProperties,
  CSeriesBasic,
} from '../types'

/**
 * Populate series[name].label from series_labels response.
 * Only works with named series as an ordered array of labels would not
 * render accurately.
 */
export const seriesLabels: ConfigHelper<CommonCartesianProperties> = ({
  config,
  data,
  fields,
}) => {
  const {
    series_labels = {},
    series = {},
    show_single_value_title = true,
    single_value_title = '',
    ...restConfig
  } = config

  const singleValueTitle = show_single_value_title ? single_value_title : ''
  const buildNamedSeries = (s: { [k: string]: CSeriesBasic }) => {
    const namedSeries = fields.measures.reduce((seriesConfig, measure) => {
      const { name } = measure
      const currentFieldSettings = pick(s, name)
      const defaultSeriesLabel = {
        // Down the chain, we'll use label_short from the field's metadata if [series].label is falsy
        [name]: {
          label:
            series_labels?.[name] ||
            measure.label ||
            measure.label_short ||
            singleValueTitle,
        },
      }

      return merge(seriesConfig, defaultSeriesLabel, currentFieldSettings)
    }, {} as { [key: string]: CSeriesBasic })

    return namedSeries
  }

  const buildArraySeries = (s: CSeriesBasic[] = []) => {
    const arraySeries = [...s]
    for (let i = 0; i < fields.measures.length; i++) {
      const measure = fields.measures[i]
      const seriesLabelValues = Object.values(series_labels)
      const {
        label = seriesLabelValues[i] || measure.label || measure.label_short,
      } = arraySeries[i] || {}
      set(arraySeries, [i, 'label'], label)
    }

    return arraySeries
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
