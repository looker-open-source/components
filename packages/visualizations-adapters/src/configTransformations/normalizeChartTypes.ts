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

import has from 'lodash/has'
import type { ConfigHelper, CAll, RawApiConfigResponse } from '../types'

export type RawChartType = CAll['type'] | RawApiConfigResponse['type'] | ''

export const CHART_TYPE_MAP: Record<RawChartType, CAll['type']> = {
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

  const normalizedType = has(CHART_TYPE_MAP, type) ? CHART_TYPE_MAP[type] : type

  return {
    config: { ...config, type: normalizedType },
    data,
    fields,
  }
}
