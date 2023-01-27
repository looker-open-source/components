/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { sortByDateTime } from './sortByDateTime'
import { mockFields } from '../fixtures'

describe('sortByDateTime', () => {
  const mockData = [
    { 'orders.created_month': '2019-11', 'orders.count': 1 },
    { 'orders.created_month': '2018-10', 'orders.count': 20 },
    { 'orders.created_month': '2014-07', 'orders.count': 300 },
    { 'orders.created_month': '2017-09', 'orders.count': 4000 },
  ]
  const { measures, dimensions } = mockFields

  it('sorts data in chronological order', () => {
    const sortedData = sortByDateTime({
      data: mockData,
      fields: {
        measures,
        dimensions: [{ ...dimensions[0], name: 'orders.created_month' }],
        pivots: [],
      },
      config: { type: 'line' },
    })

    expect(sortedData.data).toMatchInlineSnapshot(`
      Array [
        Object {
          "orders.count": 300,
          "orders.created_month": "2014-07",
        },
        Object {
          "orders.count": 4000,
          "orders.created_month": "2017-09",
        },
        Object {
          "orders.count": 20,
          "orders.created_month": "2018-10",
        },
        Object {
          "orders.count": 1,
          "orders.created_month": "2019-11",
        },
      ]
    `)
  })
})
