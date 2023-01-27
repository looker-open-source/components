/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type {
  Fields,
  SupportedChartTypes,
  RawApiConfigResponse,
  SDKRecord,
} from './'

export type KnownChartTypes =
  | keyof SupportedChartTypes
  | RawApiConfigResponse['type']

export interface ConfigHelperArgs<ChartConfig> {
  config: Omit<ChartConfig, 'type'> &
    Partial<Omit<RawApiConfigResponse, 'type'>> & {
      type?: KnownChartTypes
    }
  fields: Fields
  data: SDKRecord[]
}

// helper function args and return value must match for easy function composition
export type ConfigHelper<ChartConfig> = (
  args: ConfigHelperArgs<ChartConfig>
) => ConfigHelperArgs<ChartConfig>
