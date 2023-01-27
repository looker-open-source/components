/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { mockSDK } from '@looker/visualizations-adapters'
import type { Looker40SDK } from '@looker/sdk'

// mock to track sdk activity
export const sdkMethodQueryListener = jest.fn()
export const sdkMethodQueryForSlugListener = jest.fn()
export const sdkMethodDashboardListener = jest.fn()
export const sdkMethodRunQueryListener = jest.fn()
export const sdkMethodLookmlModelExploreListener = jest.fn()
export const sdkMethodCreateQueryListener = jest.fn()
export const sdkMethodColorCollectionListener = jest.fn()

export const mockSDKWithListeners: Partial<Looker40SDK> = {
  ...mockSDK,
  color_collection: () =>
    (mockSDK as Looker40SDK)
      .color_collection('abcdefghijklmnop')
      .then((result) => {
        sdkMethodColorCollectionListener(result)
        return result
      }),
  create_query: () =>
    (mockSDK as Looker40SDK).create_query({}).then((result) => {
      sdkMethodCreateQueryListener(result)
      return result
    }),
  dashboard: () =>
    (mockSDK as Looker40SDK).dashboard('1').then((result) => {
      sdkMethodDashboardListener(result)
      return result
    }),
  lookml_model_explore: () =>
    (mockSDK as Looker40SDK)
      .lookml_model_explore('thelook', 'orders')
      .then((result) => {
        sdkMethodLookmlModelExploreListener(result)
        return result
      }),
  query: () =>
    (mockSDK as Looker40SDK).query('1').then((result) => {
      sdkMethodQueryListener(result)
      return result
    }),
  query_for_slug: () =>
    (mockSDK as Looker40SDK).query_for_slug('qz123').then((result) => {
      sdkMethodQueryForSlugListener(result)
      return result
    }),
  run_query: () =>
    (mockSDK as Looker40SDK)
      .run_query({
        query_id: '1',
        result_format: 'json_detail',
      })
      .then((result) => {
        sdkMethodRunQueryListener(result)
        return result
      }),
}
