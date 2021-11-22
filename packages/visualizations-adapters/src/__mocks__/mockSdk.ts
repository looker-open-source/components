/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
  mockSdkConfigResponse,
  mockSdkFieldsResponse,
  mockSdkDataResponse,
} from './'

// eslint-disable-next-line no-restricted-imports
import type { ILooker40SDK } from '@looker/sdk'
import type { SDKResponse } from '@looker/sdk-rtl'

/* eslint-disable @typescript-eslint/no-explicit-any */
type Response = SDKResponse<any, any>

export const mockSDK: Partial<ILooker40SDK> = {
  query_for_slug: () =>
    Promise.resolve({
      ok: true,
      value: { id: 126, vis_config: mockSdkConfigResponse },
    } as Response),
  run_query: () =>
    Promise.resolve({
      ok: true,
      error: null,
      value: {
        data: mockSdkDataResponse,
        fields: mockSdkFieldsResponse,
      },
    } as Response),
  query: () =>
    Promise.resolve({
      ok: true,
      value: { vis_config: mockSdkConfigResponse },
    } as Response),
}
