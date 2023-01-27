/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { mockLineConfig, mockFields, mockSdkDataResponse } from '../fixtures'
import { renderNullValues } from './renderNullValues'

describe('renderNullValues', () => {
  test('default', () => {
    const config = { ...mockLineConfig }
    const { config: transformedConfig } = renderNullValues({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.render_null_values).toEqual(false)
  })

  test('config.render_null_values === true', () => {
    const config = { ...mockLineConfig, render_null_values: true }
    const { config: transformedConfig } = renderNullValues({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.render_null_values).toEqual(true)
  })

  test('config.render_null_values === false', () => {
    const config = { ...mockLineConfig, render_null_values: false }
    const { config: transformedConfig } = renderNullValues({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.render_null_values).toEqual(false)
  })
})
