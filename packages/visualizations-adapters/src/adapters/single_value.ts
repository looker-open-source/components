/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { VisWrapperProps } from '../VisWrapper'
import type {
  CSeriesBasic,
  SupportedChartTypes,
  SDKRecord,
  Fields,
  ChartLayoutProps,
} from '../types'

export type CSingleValueSeries = Omit<CSeriesBasic, 'visible'>

export type CSingleValue = {
  type?: SupportedChartTypes['single_value']
  series?: CSingleValueSeries[] | { [key: string]: CSingleValueSeries }
}

export type SingleValueProps = VisWrapperProps &
  ChartLayoutProps & {
    data: SDKRecord[]
    config: CSingleValue
    fields: Fields
  }
