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
import { mockSDK } from '@looker/visualizations-adapters'
import type { Looker40SDK } from '@looker/sdk'

// mock to track sdk activity
export const sdkMethodQueryListener = jest.fn()
export const sdkMethodQueryForSlugListener = jest.fn()
export const sdkMethodDashboardListener = jest.fn()
export const sdkMethodRunQueryListener = jest.fn()
export const sdkMethodLookmlModelExploreListener = jest.fn()

export const mockSDKWithListeners: Partial<Looker40SDK> = {
  ...mockSDK,
  dashboard: () =>
    (mockSDK as Looker40SDK).dashboard('1').then(result => {
      sdkMethodDashboardListener(result)
      return result
    }),
  lookml_model_explore: () =>
    (mockSDK as Looker40SDK)
      .lookml_model_explore('thelook', 'orders')
      .then(result => {
        sdkMethodLookmlModelExploreListener(result)
        return result
      }),
  query: () =>
    (mockSDK as Looker40SDK).query('1').then(result => {
      sdkMethodQueryListener(result)
      return result
    }),
  query_for_slug: () =>
    (mockSDK as Looker40SDK).query_for_slug('qz123').then(result => {
      sdkMethodQueryForSlugListener(result)
      return result
    }),
  run_query: () =>
    (mockSDK as Looker40SDK)
      .run_query({
        query_id: '1',
        result_format: 'json_detail',
      })
      .then(result => {
        sdkMethodRunQueryListener(result)
        return result
      }),
}
