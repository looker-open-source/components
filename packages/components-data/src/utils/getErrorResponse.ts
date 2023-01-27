/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { IError } from '@looker/sdk'
import type { SDKResponse } from '@looker/sdk-rtl'
import { isErrorResponse } from '.'

/* eslint-disable @typescript-eslint/no-explicit-any */

export const getErrorResponse = (
  sdkResponse?: SDKResponse<any, IError> | void
) => {
  const errorResponse = isErrorResponse(sdkResponse)
    ? sdkResponse.error
    : undefined

  return errorResponse ? { error: errorResponse } : {}
}
