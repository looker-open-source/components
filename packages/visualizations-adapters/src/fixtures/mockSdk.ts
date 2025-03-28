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
  mockSdkConfigResponse,
  mockSdkFieldsResponse,
  mockSdkDataResponse,
  mockSDKModelExploreResponse,
  mockSdkColorCollectionResponse,
} from './';

// eslint-disable-next-line no-restricted-imports
import type { Looker40SDK } from '@looker/sdk';
import type { SDKResponse } from '@looker/sdk-rtl';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Response = SDKResponse<any, any>;

export const mockSDK = {
  color_collection: () =>
    Promise.resolve({
      ok: true,
      value: mockSdkColorCollectionResponse,
    }),
  create_query: () =>
    Promise.resolve({
      ok: true,
      value: {
        id: '126',
        vis_config: mockSdkConfigResponse,
        model: 'thelook',
        view: 'orders',
      },
    }),
  dashboard: () =>
    Promise.resolve({
      ok: true,
      value: {
        dashboard_elements: [
          {
            query: {
              id: '126',
              vis_config: mockSdkConfigResponse,
              model: 'thelook',
              view: 'orders',
            },
          },
        ],
      },
    } as Response),
  lookml_model_explore: () =>
    Promise.resolve({ ok: true, value: mockSDKModelExploreResponse }),
  query_for_slug: () =>
    Promise.resolve({
      ok: true,
      value: {
        id: '126',
        vis_config: mockSdkConfigResponse,
        model: 'thelook',
        view: 'orders',
      },
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
      value: {
        vis_config: mockSdkConfigResponse,
        model: 'thelook',
        view: 'orders',
      },
    } as Response),
} as unknown as Looker40SDK;
