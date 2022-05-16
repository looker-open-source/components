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

import type { IContinuousPalette, IDiscretePalette } from '@looker/sdk'

import type {
  LegendPositions,
  PointShapes,
  LegendTypes,
  LabelTypes,
  SupportedChartTypes,
} from './'
import type { CBar, CArea } from '../adapters'

export type ColorApplication = {
  collection_id: string
  palette_id?: string
  options?: { steps: number; reverse: boolean }
  custom?: IDiscretePalette | IContinuousPalette
}

/**
 * RapApiConfigResponse represents config attributes that will be ingested from the api
 * and transformed to our final public contract.
 */
export type RawApiConfigResponse = {
  color_application?: ColorApplication
  custom_color: string
  defaults_version: number
  default_series_colors?: string[]
  hide_legend: boolean
  hidden_fields: string[]
  interpolation: 'linear'
  label_density: number
  label_type?: LabelTypes
  label_value_format?: string
  legend_position: LegendPositions | 'center'
  plot_size_by_field: boolean
  point_style: 'none' | 'circle' | 'circle_outline'
  series_cell_visualizations: { [key: string]: { is_active: boolean } }
  series_colors: { [key: string]: string }
  series_labels: { [key: string]: string }
  series_point_styles: { [key: string]: PointShapes | 'automatic' }
  series_types: Record<string, string>
  series_value_format?: { [key: string]: { [key: string]: string } }
  show_null_points: boolean
  show_value_labels: boolean
  show_view_names: boolean
  show_x_axis_ticks: boolean
  show_x_axis_label: boolean
  show_y_axis_labels: boolean
  show_y_axis_ticks: boolean
  show_single_value_title?: boolean
  single_value_title?: string
  size_by_field: string
  stacking:
    | Exclude<CBar['positioning'], undefined>
    | Exclude<CArea['positioning'], undefined>
    | 'normal'
  trellis: string
  type:
    | 'looker_area'
    | 'looker_bar'
    | 'looker_column'
    | 'looker_line'
    | 'looker_grid'
    | 'looker_pie'
    | 'looker_scatter'
    | keyof SupportedChartTypes
  value_format?: string
  value_labels: LegendTypes
  x_axis_label?: string | null
  x_axis_scale: 'auto'
  y_axes: YAxisRaw[]
  y_axis_gridlines: boolean
  x_axis_gridlines: boolean
  x_axis_reversed: boolean
  y_axis_reversed: boolean
  y_axis_tick_density: 'default' | 'custom'
  y_axis_tick_density_custom: number
  y_axis_combined: boolean
  y_axis_scale_mode: 'linear'
}

/**
 * Y-Axis configuration as it's delivered from the sdk.
 * To be transformed into our final public contract.
 */

export interface YAxisRaw {
  label?: string
  orientation?: string
  showLabels?: boolean
  showValues?: boolean
  tickDensity?: 'default' | 'custom'
  tickDensityCustom?: number
  minValue?: number
  maxValue?: number
}
