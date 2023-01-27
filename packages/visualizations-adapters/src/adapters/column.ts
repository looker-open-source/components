/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { VisWrapperProps } from '../VisWrapper'
import type { BarBaseOptions } from './bar'
import type {
  ChartLayoutProps,
  CommonCartesianProperties,
  SupportedChartTypes,
  SDKRecord,
  Fields,
} from '../types'

export type ColumnProps = VisWrapperProps &
  ChartLayoutProps & {
    data: SDKRecord[]
    config: CColumn
    fields: Fields
  }

export type CColumn = {
  type?: SupportedChartTypes['column']
} & BarBaseOptions &
  CommonCartesianProperties
