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
  CSeriesBasic,
  CommonCartesianProperties,
} from '../types'
import merge from 'lodash/merge'
import pick from 'lodash/pick'
import get from 'lodash/get'
import { DEFAULT_STRING_FORMAT } from '../utils/constants'

export const seriesValueFormat: ConfigHelper<CommonCartesianProperties> = ({
  config,
  fields,
  data,
}) => {
  const {
    series = {},
    value_format,
    label_value_format,
    series_value_format = {},
    ...restConfig
  } = config
  const valueFormat = value_format || label_value_format

  const buildArraySeries = (s: CSeriesBasic[] = []) => {
    const arraySeries = [...s]
    const defaultValues = fields?.measures?.map((measure) => ({
      value_format:
        get(series_value_format, [measure.name, 'format_string']) ||
        get(measure, 'value_format') ||
        valueFormat ||
        DEFAULT_STRING_FORMAT,
    }))
    for (let i = 0; i < defaultValues?.length; i++) {
      arraySeries[i] = Object.assign({}, defaultValues[i], arraySeries[i])
    }
    return arraySeries
  }

  const buildNamedSeries = (s: { [k: string]: CSeriesBasic }) => {
    const namedSeries = fields?.measures?.reduce((seriesConfig, measure) => {
      const { name } = measure
      const currentFieldSettings = pick(s, name)
      const seriesValueFormatString = get(series_value_format, [
        name,
        'format_string',
      ])
      const measureValueFormat = get(measure, 'value_format')
      const defaultValueFormat = {
        [name]: {
          value_format:
            seriesValueFormatString ||
            measureValueFormat ||
            valueFormat ||
            DEFAULT_STRING_FORMAT,
        },
      }
      return merge(seriesConfig, defaultValueFormat, currentFieldSettings)
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
    data,
  }
}
