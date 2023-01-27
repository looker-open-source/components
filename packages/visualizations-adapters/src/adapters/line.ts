/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { VisWrapperProps } from '../VisWrapper'
import type {
  CommonCartesianProperties,
  Fields,
  SDKRecord,
  CSeriesBasic,
  CSeriesPoints,
  CSeriesLine,
  LinearPositions,
  SupportedChartTypes,
  ChartLayoutProps,
} from '../types'

export type CLineSeries = Partial<CSeriesBasic & CSeriesPoints & CSeriesLine>

export type CLineBase = {
  positioning?: LinearPositions
  series?: CLineSeries[] | { [key: string]: CLineSeries }
  render_null_values?: boolean
} & Omit<CommonCartesianProperties, 'series'>

export type CLine = {
  type?: SupportedChartTypes['line']
} & CLineBase

export type LineProps = VisWrapperProps &
  ChartLayoutProps & {
    data: SDKRecord[]
    fields: Fields
    config: CLine
  }
