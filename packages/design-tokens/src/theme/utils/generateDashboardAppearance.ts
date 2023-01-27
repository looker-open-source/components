/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Colors } from '../../color/types'
import type {
  DashboardAppearance,
  TileTitleAlignment,
} from '../dashboardAppearance'

export const generateDashboardAppearance = (
  colors: Colors
): DashboardAppearance => ({
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
    titleAlignment: 'center' as TileTitleAlignment,
  },
  title: true,
})
