/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { VisWrapperProps } from '../VisWrapper'
import type {
  ChartLayoutProps,
  CSeriesBasic,
  LegendTypes,
  LegendValues,
  SDKRecord,
  SupportedChartTypes,
  LegendPositions,
  Fields,
} from '../types'

export type CPieSeries = Pick<CSeriesBasic, 'color'>

export type PieProps = VisWrapperProps &
  ChartLayoutProps & {
    data: SDKRecord[]
    config: CPie
    fields: Fields
  }

export type CPieLegend = {
  position?: LegendPositions
  type?: LegendTypes
  width?: number
  value?: LegendValues
}

export type CPie = {
  type?: SupportedChartTypes['pie']
  legend?: false | CPieLegend
  tooltips?: boolean
  series: CPieSeries[] | { [key: string]: CPieSeries }
}
