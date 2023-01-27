/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
