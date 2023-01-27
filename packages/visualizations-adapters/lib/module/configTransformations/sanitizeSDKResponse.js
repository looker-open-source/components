

import omit from 'lodash/omit';
export const KEYS_TO_REMOVE = ['color_application', 'defaults_version', 'default_series_colors', 'hidden_fields', 'hide_legend', 'interpolation', 'label_density', 'label_type', 'label_type', 'legend_position', 'plot_size_by_field', 'point_style', 'series_cell_visualizations', 'series_colors', 'series_labels', 'series_point_styles', 'series_types', 'show_null_points', 'show_value_labels', 'show_view_names', 'show_x_axis_label', 'show_x_axis_ticks', 'show_y_axis_labels', 'show_y_axis_ticks', 'size_by_field', 'stacking', 'trellis', 'value_labels', 'x_axis_gridlines', 'x_axis_reversed', 'x_axis_scale', 'y_axes', 'y_axis_combined', 'y_axis_gridlines', 'y_axis_reversed', 'y_axis_scale_mode', 'y_axis_tick_density', 'y_axis_tick_density_custom'];

export const sanitizeSDKResponse = ({
  config,
  data,
  fields
}) => {

  const unusedVar = undefined;
  return {
    config: omit(config, KEYS_TO_REMOVE),
    data,
    fields
  };
};
//# sourceMappingURL=sanitizeSDKResponse.js.map