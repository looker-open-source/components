/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { tabularPivotResponse } from './tabularPivotResponse'
import {
  mockPivots,
  mockSdkPivotDataResponse,
  mockSdkFieldsResponse,
} from '../fixtures'

import type { Fields } from '../types'

describe('tabularPivotResponse', () => {
  it('flattens raw pivot data', () => {
    const transformedData = tabularPivotResponse({
      data: mockSdkPivotDataResponse,
      fields: mockSdkFieldsResponse as Fields,
      pivots: mockPivots,
    })

    const expectedKeys = [
      'orders.created_date',
      'complete - orders.count',
      'pending - orders.count',
      'cancelled - orders.count',
      'complete - orders.average_total_amount_of_order_usd',
      'pending - orders.average_total_amount_of_order_usd',
      'cancelled - orders.average_total_amount_of_order_usd',
    ]

    expectedKeys.forEach((key) => {
      expect(transformedData[0][key]).not.toBeUndefined()
    })

    expect(transformedData[0]['pending - orders.count']).toBe(38)
    expect(
      transformedData[1]['pending - orders.average_total_amount_of_order_usd']
    ).toBe(80.47117647058822)
  })
})
