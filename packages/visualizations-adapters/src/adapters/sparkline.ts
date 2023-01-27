/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { VisWrapperProps } from '../VisWrapper'
import type {
  SDKRecord,
  Fields,
  CSeriesBasic,
  CSeriesLine,
  SupportedChartTypes,
  ChartLayoutProps,
  CommonCartesianProperties,
} from '../types'

export type CSparklineSeries = Pick<CSeriesBasic, 'color' | 'visible'> &
  CSeriesLine

export type CSparkline = {
  // Color Scheme
  series?: CSparklineSeries[] | { [key: string]: CSparklineSeries }
  /**
   * Either render a gap where data is null, or treat it as a value 0
   */
  render_null_values?: boolean
  type?: SupportedChartTypes['sparkline']
} & Pick<CommonCartesianProperties, 'y_axis'>

export type SparklineProps = VisWrapperProps &
  ChartLayoutProps & {
    data: SDKRecord[]
    fields: Fields
    config?: CSparkline
  }
