

export const generateDashboardAppearance = colors => ({
  center_dashboard_title: false,
  filters: true,
  show_dashboard_header: true,
  show_dashboard_menu: true,
  show_filters_toggle: true,
  show_last_updated_indicator: true,
  show_reload_data_icon: true,
  tiles: {
    background: colors.background,
    body: colors.body,
    text_tile_background_color: colors.pageBackground,
    title: colors.title,
    titleAlignment: 'center'
  },
  title: true
});
//# sourceMappingURL=generateDashboardAppearance.js.map