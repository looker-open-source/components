/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { VisWrapperProps } from '../VisWrapper'
import type {
  Fields,
  SDKRecord,
  CSeriesBasic,
  SupportedChartTypes,
  ChartLayoutProps,
  Pivots,
} from '../types'

export type CTableSeries = { cell_visualization?: boolean } & CSeriesBasic

export type CTable = {
  column_order?: string[]
  // Tables should probably never use an ordered array, but we need to keep this symmetrical with other adapters
  series?: CTableSeries[] | { [key: string]: CTableSeries }
  show_row_numbers?: boolean
  truncate_text?: boolean
  truncate_header?: boolean
  type?: SupportedChartTypes['table']
  show_totals?: boolean
  hide_totals?: boolean
  show_row_totals?: boolean
  hide_row_totals?: boolean
}

export type TableProps = VisWrapperProps &
  ChartLayoutProps & {
    data: SDKRecord[]
    config: CTable
    fields: Fields
    pivots?: Pivots
    totals?: Record<string, number>
    row_totals?: Record<string, number>
    defaultRowHeight?: number
  }
