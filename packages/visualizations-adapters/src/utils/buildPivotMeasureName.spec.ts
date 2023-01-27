/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { buildPivotMeasureName } from './buildPivotMeasureName'

describe('buildPivotMeasureName', () => {
  it('concats a measure name and pivot value with a | character', () => {
    const pivotMeasureName = buildPivotMeasureName({
      measureName: 'orders.count',
      pivotValue: 'complete',
    })

    expect(pivotMeasureName).toEqual('complete - orders.count')
  })
})
