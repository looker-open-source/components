/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import has from 'lodash/has'
import type {
  CAll,
  ConfigHelper,
  SupportedChartTypes,
  ValueOf,
  KnownChartTypes,
} from '../types'

export const CHART_TYPE_MAP: Record<
  KnownChartTypes | '',
  ValueOf<SupportedChartTypes>
> = {
  '': 'default',
  area: 'area',
  bar: 'bar',
  column: 'column',
  default: 'default',
  line: 'line',
  looker_area: 'area',
  looker_bar: 'bar',
  looker_column: 'column',
  looker_grid: 'table',
  looker_line: 'line',
  looker_pie: 'pie',
  looker_scatter: 'scatter',
  pie: 'pie',
  scatter: 'scatter',
  single_value: 'single_value',
  sparkline: 'sparkline',
  table: 'table',
}

const isKnownChartType = (type: string): type is keyof SupportedChartTypes => {
  return has(CHART_TYPE_MAP, type)
}

/**
 * This function should be ran BEFORE all other config helpers.
 * It normalizes the chart type names (i.e. 'line' instead of 'looker_line')
 */
export const normalizeChartTypes: ConfigHelper<CAll> = ({
  config,
  data,
  fields,
}) => {
  const { type = CHART_TYPE_MAP.default } = config

  const normalizedType = isKnownChartType(type) ? CHART_TYPE_MAP[type] : type

  return {
    config: { ...config, type: normalizedType },
    data,
    fields,
  }
}
