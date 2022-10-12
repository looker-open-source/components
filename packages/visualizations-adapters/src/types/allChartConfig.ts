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

import type {
  CArea,
  CBar,
  CColumn,
  CLine,
  CPie,
  CScatter,
  CSparkline,
  CTable,
  CSingleValue,
} from '../adapters'

/*
 * These types represent common unions of our chart adapters.
 * CAll should list all charts, CCartesian should list
 * all cartesian type charts, etc.
 */

// IMPORTANT: be sure to update `normalizeChartTypes` to map any proprietary
// looker chart names to these standards.
export const SUPPORTED_CHART_TYPES = {
  area: 'area',
  bar: 'bar',
  column: 'column',
  default: 'default',
  line: 'line',
  pie: 'pie',
  scatter: 'scatter',
  single_value: 'single_value',
  sparkline: 'sparkline',
  table: 'table',
} as const

export type SupportedChartTypes = typeof SUPPORTED_CHART_TYPES

/*
 * Cartesian charts which have some common config options
 */
export type CCartesian = CArea | CBar | CColumn | CLine | CScatter

/*
 * All supported chart config objects
 */

export type CAll =
  | CArea
  | CBar
  | CColumn
  | CLine
  | CPie
  | CSparkline
  | CScatter
  | CTable
  | CSingleValue
  | { type: string }
