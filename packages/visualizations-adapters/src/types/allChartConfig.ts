/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
