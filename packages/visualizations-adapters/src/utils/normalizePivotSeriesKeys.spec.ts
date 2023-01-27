/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { normalizePivotSeriesKeys } from './normalizePivotSeriesKeys'

describe('normalizePivotSeriesKeys', () => {
  it('converts sdk formatted pivot keys to our supported pivot keys', () => {
    const series_colors = {
      'Yes - orders.count': '#FFFFFF',
    }
    const output = normalizePivotSeriesKeys(series_colors)

    expect(output).toEqual({ 'Yes - orders.count': '#FFFFFF' })
  })

  it('it converts Row Total keys to reference magic string', () => {
    const series_colors = {
      '$$$_row_total_$$$ - orders.count': '#FFFFFF',
    }
    const output = normalizePivotSeriesKeys(series_colors)
    expect(output).toEqual({ '$$$_row_total_$$$ - orders.count': '#FFFFFF' })
  })
})
