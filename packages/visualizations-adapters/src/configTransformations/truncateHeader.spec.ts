/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { mockLineConfig, mockFields, mockSdkDataResponse } from '../fixtures'
import { truncateHeader } from './truncateHeader'

test('config.truncate_header === undefined', () => {
  const config = { ...mockLineConfig, truncate_header: undefined }
  const { config: transformedConfig } = truncateHeader({
    config,
    data: mockSdkDataResponse,
    fields: mockFields,
  })
  expect(transformedConfig.truncate_header).toEqual(true)
})

test('config.truncate_header === true', () => {
  const config = { ...mockLineConfig, truncate_header: true }
  const { config: transformedConfig } = truncateHeader({
    config,
    data: mockSdkDataResponse,
    fields: mockFields,
  })
  expect(transformedConfig.truncate_header).toEqual(true)
})

test('config.truncate_header === false', () => {
  const config = { ...mockLineConfig, truncate_header: false }
  const { config: transformedConfig } = truncateHeader({
    config,
    data: mockSdkDataResponse,
    fields: mockFields,
  })
  expect(transformedConfig.truncate_header).toEqual(false)
})
