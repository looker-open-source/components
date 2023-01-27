/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import {
  normalizeChartTypes,
  chartConfigByType,
  sanitizeSDKResponse,
} from '../configTransformations'
import flow from 'lodash/flow'
import type {
  ConfigHelperArgs,
  CAll,
  RawApiConfigResponse,
  Fields,
  SDKRecord,
  SupportedChartTypes,
} from '../types'

type ChartConfigArgs = {
  config: Partial<CAll> | Partial<RawApiConfigResponse>
  data?: SDKRecord[]
  fields?: Fields
}

/**
 * Utility function builds and sanitizes the public config object from
 * the provided raw sdk response and selected transformations.
 * @param config vis config as it comes unsanitized from sdk
 * @param data query response
 * @param fields metadata describing fields and dimensions from query
 * @returns
 */
export const buildChartConfig = (args: ChartConfigArgs) => {
  const isDataValid = args.data?.length && args.fields?.measures?.length

  const { config } = flow([
    normalizeChartTypes,
    (args: ConfigHelperArgs<CAll>) => {
      const { type } = args.config

      const configTransformations =
        chartConfigByType[type as keyof SupportedChartTypes] ||
        chartConfigByType.default

      if (isDataValid) {
        // if necessary data is present, run transformations
        return flow(configTransformations)(args)
      } else {
        // if no data or fields, simply pass through unmodified results at this point
        return args
      }
    },
    sanitizeSDKResponse,
  ])(args)

  return config
}
