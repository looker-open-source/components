/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { mockTableConfig, mockFields, mockSdkDataResponse } from '../fixtures'
import { showTotals } from './showTotals'

describe('showTotals', () => {
  test('config.show_totals === undefined', () => {
    const config = { ...mockTableConfig }
    const { config: transformedConfig } = showTotals({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.show_totals).toEqual(true)
  })

  test('config.show_totals === true', () => {
    const config = { ...mockTableConfig, show_totals: true }
    const { config: transformedConfig } = showTotals({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.show_totals).toEqual(true)
  })

  test('config.show_totals === false', () => {
    const config = { ...mockTableConfig, show_totals: false }
    const { config: transformedConfig } = showTotals({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.show_totals).toEqual(false)
  })
})
