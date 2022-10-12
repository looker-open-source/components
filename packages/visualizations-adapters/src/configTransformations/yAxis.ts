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
  CCartesian,
  YAxisConfig,
  YAxisRaw,
  RawApiConfigResponse,
} from '../types'
import omitBy from 'lodash/omitBy'
import isNull from 'lodash/isNull'

type YAxisRawExtended = YAxisRaw & {
  y_axis_gridlines: RawApiConfigResponse['y_axis_gridlines']
  y_axis_reversed: RawApiConfigResponse['y_axis_reversed']
}

/**
 * Helper function sets default values for each y-axis config object.
 * It uses anything set in `axisRaw` as fallback, and gives preference to
 * values set in `axisOfficial`.
 *
 * @param axisRaw the axis config as it comes directly from the sdk
 * @param axisOfficial any user overrides or post-transformed value
 * @param fallbackLabel will usually be a measure field's label unless there are multiple measures
 */
const deriveDefaults = (
  axisRaw: YAxisRawExtended,
  axisOfficial: YAxisConfig,
  fallbackLabel?: string
): YAxisConfig => {
  // raw sdk attributes
  const {
    showLabels,
    showValues,
    minValue,
    maxValue,
    label: labelRaw,
    y_axis_gridlines,
  } = axisRaw

  const yAxisLabel = labelRaw || fallbackLabel

  // officially supported config values, falling back to raw sdk attributes
  const {
    gridlines = y_axis_gridlines,
    label = showLabels === false ? false : yAxisLabel,
    range = [
      minValue === undefined ? 'auto' : minValue,
      maxValue === undefined ? 'auto' : maxValue,
    ],
    values = showValues,
  } = axisOfficial as YAxisConfig

  return {
    gridlines: typeof gridlines === 'undefined' ? true : gridlines,
    label,
    range,
    values: typeof values === 'undefined' ? true : values,
  }
}

/**
 * Combine `y_axis_reversed` and `y_axes: {showValues, showLabels}` into
 * `y_axis: {reversed, show_values, show_label }`
 */
export const yAxis: ConfigHelper<CCartesian> = ({ config, data, fields }) => {
  const {
    y_axes: y_axis_raw = [{}] as YAxisRaw[], // default object from SDK
    y_axis_reversed = false,
    y_axis_gridlines = true,
    y_axis = [{}] as YAxisConfig[], // officially supported config
    ...restConfig
  } = config

  const longestListLength = Math.max(y_axis_raw.length, y_axis.length)
  const numberOfMeasureLabels = Array.from(
    new Set(fields.measures.map((measure) => measure.label))
  ).length
  const yAxisWithDefaults: YAxisConfig[] = []

  for (let i = 0; i < longestListLength; i++) {
    const rawAxisAtPosition = omitBy(y_axis_raw[i] || {}, isNull)
    const officialAxisAtPosition = y_axis[i] || {}

    /**
     * If there are multiple measure labels to choose from,
     * we don't want the default y-axis label to be a measure label
     */
    const { label, view_label } = fields.measures[i] || {}
    const fallbackLabel =
      numberOfMeasureLabels === 1 ? label || view_label : undefined

    yAxisWithDefaults[i] = deriveDefaults(
      { ...rawAxisAtPosition, y_axis_gridlines, y_axis_reversed },
      officialAxisAtPosition,
      fallbackLabel
    )
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
