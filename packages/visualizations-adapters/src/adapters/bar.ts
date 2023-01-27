/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { VisWrapperProps } from '../VisWrapper'
import type {
  ChartLayoutProps,
  SDKRecord,
  CommonCartesianProperties,
  BarPositions,
  SupportedChartTypes,
  Fields,
} from '../types'

export type BarProps = VisWrapperProps &
  ChartLayoutProps & {
    data: SDKRecord[]
    config: CBar
    fields: Fields
  }

export type BarBaseOptions = {
  positioning?: BarPositions
}

export type CBar = {
  type?: SupportedChartTypes['bar']
} & BarBaseOptions &
  CommonCartesianProperties
