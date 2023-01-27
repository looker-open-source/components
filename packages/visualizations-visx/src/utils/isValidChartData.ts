/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { SDKRecord, Fields } from '@looker/visualizations-adapters'

/**
 * A simple utility function that validates whether there is sufficient data to render
 * a chart from provided data and fields objects
 * @param data is the key/value query result returned by the SDK
 * @param fields is the metadata object describing series measures and dimensions
 */

export const isValidChartData = (data?: SDKRecord[], fields?: Fields) => {
  return data?.length && fields?.measures.length
}
