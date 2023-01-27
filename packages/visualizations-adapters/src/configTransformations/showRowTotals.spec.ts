/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { mockTableConfig, mockFields, mockSdkDataResponse } from '../fixtures'
import { showRowTotals } from './showRowTotals'

describe('showRowTotals', () => {
  test.only('config.show_row_totals === undefined', () => {
    const config = { ...mockTableConfig }
    const { config: transformedConfig } = showRowTotals({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.show_row_totals).toEqual(true)
  })

  test('config.show_row_totals === true', () => {
    const config = { ...mockTableConfig, show_row_totals: true }
    const { config: transformedConfig } = showRowTotals({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.show_row_totals).toEqual(true)
  })

  test('config.show_row_totals === false', () => {
    const config = { ...mockTableConfig, show_row_totals: false }
    const { config: transformedConfig } = showRowTotals({
      config,
      data: mockSdkDataResponse,
      fields: mockFields,
    })
    expect(transformedConfig.show_row_totals).toEqual(false)
  })
})
