/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
 * This function should be run for all chart types, AFTER all other config helpers.
 * It removes top-level api responses that we use to derive settings, but are
 * not publicly supported.
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const unusedVar: MustBeNever = undefined

  return {
    config: omit(config, KEYS_TO_REMOVE),
    data,
    fields,
  }
}
