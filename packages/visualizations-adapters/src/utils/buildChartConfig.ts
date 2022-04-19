/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

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
