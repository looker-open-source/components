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
  XAxisConfig,
  RawApiConfigResponse,
  FieldMetadata,
} from '../types'
import omitBy from 'lodash/omitBy'
import isNull from 'lodash/isNull'

type XAxisRaw = {
  x_axis_reversed: RawApiConfigResponse['x_axis_reversed']
  x_axis_gridlines: RawApiConfigResponse['x_axis_gridlines']
  show_x_axis_ticks: RawApiConfigResponse['show_x_axis_ticks']
  show_x_axis_label: RawApiConfigResponse['show_x_axis_label']
  x_axis_label: RawApiConfigResponse['x_axis_label']
}

/**
 * Helper function sets default values for each y-axis config object.
 * It uses anything set in `axisRaw` as fallback, and gives preference to
 * values set in `axisOfficial`.
 *
 * @param axisRaw the axis config as it comes directly from the sdk
 * @param axisOfficial any user overrides or post-transformed value
 * @param measure field metadata
 */
const deriveDefaults = (
  axisRaw: Partial<XAxisRaw>,
  axisOfficial: XAxisConfig,
  measure: FieldMetadata
): XAxisConfig => {
  // Get default label value
  const { label: measureLabel, view_label: measureViewLabel } = measure

  // raw sdk attributes
  const {
    x_axis_reversed,
    x_axis_gridlines,
    show_x_axis_ticks,
    show_x_axis_label,
    x_axis_label = measureLabel || measureViewLabel,
  } = axisRaw as XAxisRaw

  // officially supported config values, falling back to raw sdk attributes
  const {
    gridlines = x_axis_gridlines,
    label = show_x_axis_label === false ? false : x_axis_label,
    reversed = x_axis_reversed,
    values = show_x_axis_ticks,
  } = axisOfficial as XAxisConfig

  return {
    gridlines: typeof gridlines === 'undefined' ? true : gridlines,
    label: label === null ? false : label,
    reversed: !!reversed,
    values: typeof values === 'undefined' ? true : values,
  }
}

/**
 * Merge all x-axis related properties into a single x_axis object
 */
export const xAxis: ConfigHelper<CCartesian> = ({ config, data, fields }) => {
  const {
    x_axis_reversed = false,
    x_axis_gridlines = true,
    show_x_axis_ticks = true,
    show_x_axis_label = true,
    x_axis_label,
    x_axis = [{}] as XAxisConfig[], // officially supported config
    ...restConfig
  } = config

  // bundle disparate x-axis properties coming from sdk into a single list
  const xAxisRaw: XAxisRaw[] = [
    {
      x_axis_reversed,
      x_axis_gridlines,
      show_x_axis_ticks,
      show_x_axis_label,
      x_axis_label,
    },
  ]

  const longestListLength = Math.max(xAxisRaw.length, x_axis.length)
  const xAxisWithDefaults: XAxisConfig[] = []

  for (let i = 0; i < longestListLength; i++) {
    const rawAxisAtPosition = omitBy(xAxisRaw[i] || {}, isNull)
    const officialAxisAtPosition = x_axis[i] || {}
    const measureAtPosition = fields?.dimensions?.[i] || {}

    xAxisWithDefaults[i] = deriveDefaults(
      rawAxisAtPosition,
      officialAxisAtPosition,
      measureAtPosition
    )
  }

  return {
    config: {
      ...restConfig,
      x_axis: xAxisWithDefaults,
    },
    data,
    fields,
  }
}
