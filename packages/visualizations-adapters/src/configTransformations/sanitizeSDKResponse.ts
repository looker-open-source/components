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

import omit from 'lodash/omit'
import type { ConfigHelper, CAll } from '../types'

export const KEYS_TO_REMOVE = [
  'color_application',
  'defaults_version',
  'default_series_colors',
  'hidden_fields',
  'hide_legend',
  'interpolation',
  'label_density',
  'label_type',
  'label_type',
  'legend_position',
  'plot_size_by_field',
  'point_style',
  'series_cell_visualizations',
  'series_colors',
  'series_labels',
  'series_point_styles',
  'series_types',
  'show_null_points',
  'show_value_labels',
  'show_view_names',
  'show_x_axis_label',
  'show_x_axis_ticks',
  'show_y_axis_labels',
  'show_y_axis_ticks',
  'size_by_field',
  'stacking',
  'trellis',
  'value_labels',
  'x_axis_gridlines',
  'x_axis_reversed',
  'x_axis_scale',
  'y_axes',
  'y_axis_combined',
  'y_axis_gridlines',
  'y_axis_reversed',
  'y_axis_scale_mode',
  'y_axis_tick_density',
  'y_axis_tick_density_custom',
] as const

/**
 * This function should be ran for all chart types, AFTER all other config helpers.
 * It removes top-level api responses that we use to derive settings, but are
 * not publicy supported.
 */
export const sanitizeSDKResponse: ConfigHelper<CAll> = ({
  config,
  data,
  fields,
}) => {
  type KeysOfUnion<T> = T extends T ? keyof T : never
  type ValidConfigKeys = KeysOfUnion<CAll>

  // Ensure that there is no overlap between keysToRemove and ValidConfigKeys.
  // This prevents accidental removal of config keys that we do intend to support.
  type IsNever<T extends never> = T
  type MustBeNever = IsNever<ValidConfigKeys & typeof KEYS_TO_REMOVE[number]>

  // @ts-expect-error: unused variable. just needed to do something with type MustBeNever
  const unusedVar: MustBeNever = undefined

  return {
    config: omit(config, [...KEYS_TO_REMOVE]),
    data,
    fields,
  }
}
