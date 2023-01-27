/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import {
  mockFields,
  mockSdkConfigResponse,
  mockSdkDataResponse,
} from '../fixtures'
import { KEYS_TO_REMOVE, sanitizeSDKResponse } from './sanitizeSDKResponse'

describe('sanitizeSDKResponse', () => {
  test('removes appropriate properties from config object', () => {
    const transformedConfig = sanitizeSDKResponse({
      config: mockSdkConfigResponse,
      data: mockSdkDataResponse,
      fields: mockFields,
    })

    // ensure the final output has in fact been stripped of unsupported keys
    KEYS_TO_REMOVE.forEach((key) =>
      expect(transformedConfig).not.toHaveProperty(key)
    )
  })
})
