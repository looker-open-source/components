/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { IError } from '@looker/sdk'
import type { SDKResponse, ISDKErrorResponse } from '@looker/sdk-rtl'

/**
 * Asserts that SDKResponse is an Error Response
 * @param response Can be either an SDK success or SDK error response
 * @returns boolean (is ISDKErrorResponse)
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
export const isErrorResponse = (
  response?: SDKResponse<any, IError> | void
): response is ISDKErrorResponse<IError> => {
  return response?.ok === false && 'error' in response
}
