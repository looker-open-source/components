/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { VisWrapperProps } from '../VisWrapper'
import type { CLineBase } from './'
import type {
  Fields,
  SDKRecord,
  CSeriesBasic,
  CSeriesPoints,
  CSeriesSize,
  CSeriesLine,
  SupportedChartTypes,
  ChartLayoutProps,
} from '../types'

export type CScatterSeries = CSeriesBasic &
  CSeriesPoints &
  CSeriesSize &
  CSeriesLine

export type CScatter = {
  series?: CScatterSeries[] | { [key: string]: CScatterSeries }
  type?: SupportedChartTypes['scatter']
} & Omit<CLineBase, 'series'>

export type ScatterProps = VisWrapperProps &
  ChartLayoutProps & {
    data: SDKRecord[]
    fields: Fields
    config: CScatter
  }
