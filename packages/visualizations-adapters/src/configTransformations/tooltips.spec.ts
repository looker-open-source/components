/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { mockLineConfig, mockFields, mockSdkDataResponse } from '../fixtures'
import { tooltips } from './tooltips'

describe('tooltips', () => {
  test('config.tooltips === undefined', () => {
    const config = { ...mockLineConfig }
    const { config: transformedConfig } = tooltips({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.tooltips).toEqual(true)
  })

  test('config.tooltips === true', () => {
    const config = { ...mockLineConfig, tooltips: true }
    const { config: transformedConfig } = tooltips({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.tooltips).toEqual(true)
  })

  test('config.tooltips === false', () => {
    const config = { ...mockLineConfig, tooltips: false }
    const { config: transformedConfig } = tooltips({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.tooltips).toEqual(false)
  })
})
