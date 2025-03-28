/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { IError } from '@looker/sdk';
import type { SDKResponse, ISDKErrorResponse } from '@looker/sdk-rtl';
/**
 * Asserts that SDKResponse is an Error Response
 * @param response Can be either an SDK success or SDK error response
 * @returns boolean (is ISDKErrorResponse)
 */
export declare const isErrorResponse: (response?: void | SDKResponse<any, IError> | undefined) => response is ISDKErrorResponse<IError>;
