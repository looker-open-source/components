/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { mockLineConfig, mockFields, mockSdkDataResponse } from '../fixtures'
import { truncateText } from './truncateText'

describe('truncateText', () => {
  test('config.truncate_text === undefined', () => {
    const config = { ...mockLineConfig }
    const { config: transformedConfig } = truncateText({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.truncate_text).toEqual(true)
  })

  test('config.truncate_text === true', () => {
    const config = { ...mockLineConfig, truncate_text: true }
    const { config: transformedConfig } = truncateText({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.truncate_text).toEqual(true)
  })

  test('config.truncate_text === false', () => {
    const config = { ...mockLineConfig, truncate_text: false }
    const { config: transformedConfig } = truncateText({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.truncate_text).toEqual(false)
  })
})
