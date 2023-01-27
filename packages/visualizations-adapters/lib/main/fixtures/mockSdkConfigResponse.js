"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockSdkConfigResponse = void 0;

var mockSdkConfigResponse = {
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
  series_colors: {
    'orders.count': '#FA8072',
    'orders.average_total_amount_of_order_usd': '#70BEFA'
  },
  series_labels: {
    'orders.count': 'Total Orders',
    'orders.average_total_amount_of_order_usd': 'Average Order Price'
  },
  series_point_styles: {
    'orders.count': 'diamond'
  },
  series_cell_visualizations: {
    'orders.count': {
      is_active: true
    }
  },
  y_axes: [{
    label: 'Axis name (1)',
    orientation: 'left',
    showLabels: true,
    showValues: true,
    tickDensity: 'default',
    tickDensityCustom: 5
  }],
  series_types: {},
  stacking: 'grouped',
  type: 'looker_line',
  value_labels: 'legend',
  defaults_version: 1,
  hidden_fields: ['orders.average_total_amount_of_order_usd'],
  hidden_pivots: {},
  custom_color: '#72D16D'
};
exports.mockSdkConfigResponse = mockSdkConfigResponse;
//# sourceMappingURL=mockSdkConfigResponse.js.map