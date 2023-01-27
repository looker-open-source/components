/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { getDataRange } from './getDataRange'
import { mockBarConfig, mockFields } from '../fixtures'

describe('getDataRange', () => {
  const mockData = [
    { 'orders.count': 2, 'orders.average_total_amount_of_order_usd': 5 },
    { 'orders.count': 7, 'orders.average_total_amount_of_order_usd': 3 },
    { 'orders.count': -2, 'orders.average_total_amount_of_order_usd': -10 },
  ]

  it('picks min and max value from data array', () => {
    const [dataMin, dataMax] = getDataRange({
      config: mockBarConfig,
      fields: mockFields,
      data: mockData,
    })

    expect(dataMin).toEqual(-10)
    expect(dataMax).toEqual(7)
  })

  it('picks min and max accumulated value of each data group when positioning == stacked', () => {
    const [dataMin, dataMax] = getDataRange({
      config: { ...mockBarConfig, positioning: 'stacked' },
      fields: mockFields,
      data: mockData,
    })

    expect(dataMin).toEqual(-12)
    expect(dataMax).toEqual(10)
  })
})
