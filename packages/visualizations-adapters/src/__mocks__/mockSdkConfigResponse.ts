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

import type { RawApiConfigResponse } from '../types'

/*
 * This object represents the vis config as it is returned by our SDK. It does not match the
 * shape of what we are delivering publicly.
 */

export const mockSdkConfigResponse: RawApiConfigResponse = {
  x_axis_gridlines: false,
  y_axis_gridlines: true,
  show_view_names: false,
  show_y_axis_labels: true,
  show_y_axis_ticks: true,
  y_axis_tick_density: 'default',
  y_axis_tick_density_custom: 5,
  show_x_axis_label: true,
  show_x_axis_ticks: true,
  y_axis_scale_mode: 'linear',
  x_axis_reversed: false,
  y_axis_reversed: false,
  plot_size_by_field: false,
  trellis: '',
  legend_position: 'center',
  hide_legend: false,
  point_style: 'circle_outline',
  show_value_labels: false,
  size_by_field: '',
  label_density: 25,
  x_axis_scale: 'auto',
  y_axis_combined: true,
  show_null_points: true,
  interpolation: 'linear',
  // Uncomment the next line to test array series overrides
  // series: [
  //   { color: '#f13136', shape: 'diamond', style: 'filled' },
  //   { color: '#1E792C', shape: 'triangle' },
  // ],
  series_colors: {
    'orders.count': '#FA8072',
    'orders.average_total_amount_of_order_usd': '#70BEFA',
  },
  series_labels: {
    'orders.count': 'Total Orders',
    'orders.average_total_amount_of_order_usd': 'Average Order Price',
  },
  series_point_styles: {
    'orders.count': 'diamond',
  },
  series_cell_visualizations: {
    'orders.count': {
      is_active: true,
    },
  },
  y_axes: [
    {
      label: 'Axis name (1)',
      orientation: 'left',
      showLabels: true,
      showValues: true,
      tickDensity: 'default',
      tickDensityCustom: 5,
    },
  ],
  series_types: {},
  stacking: 'grouped',
  type: 'looker_line',
  value_labels: 'legend',
  defaults_version: 1,
  hidden_fields: ['orders.average_total_amount_of_order_usd'],
  custom_color: '#72D16D',
}
