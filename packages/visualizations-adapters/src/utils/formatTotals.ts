/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Totals, TotalsValue, ValueOf } from '../types'
import { buildPivotMeasureName } from './buildPivotMeasureName'
import has from 'lodash/has'

const isTotalsValue = (obj: ValueOf<Totals>): obj is TotalsValue => {
  return has(obj, 'value')
}

export const formatTotals = (totals: Totals = {}) => {
  const entries: Record<string, ValueOf<TotalsValue>> = {}
  Object.entries(totals).forEach(([key, obj]) => {
    if (isTotalsValue(obj)) {
      entries[key] = obj.value
    } else {
      Object.entries(obj).forEach(([innerKey, innerObj]) => {
        const measureName = buildPivotMeasureName({
          measureName: key,
          pivotValue: innerKey,
        })
        entries[measureName] = innerObj.value
      })
    }
  })

  return entries
}
