/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { IError } from '@looker/sdk'
import type { SDKResponse, ISDKSuccessResponse } from '@looker/sdk-rtl'

/**
 * Asserts that SDKResponse is a Success Response
 * @param response Can be either an sdk success or sdk error response
 * @returns boolean (is ISDKSuccessResponse)
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
export const isSuccessResponse = (
  response?: SDKResponse<any, IError> | void
): response is ISDKSuccessResponse<any> => {
  return response?.ok === true && 'value' in response
}
