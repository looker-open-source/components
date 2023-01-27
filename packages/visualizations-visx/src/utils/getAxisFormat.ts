/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
