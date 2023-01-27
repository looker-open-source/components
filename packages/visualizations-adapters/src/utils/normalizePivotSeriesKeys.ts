/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { buildPivotMeasureName } from '.'

/**
 * Utility converts looker sdk formatted pivot keys (e.g. 'Yes - orders.count') to
 * vis components formatted pivot keys (e.g. 'orders.count|Yes'), and converts
 * the string 'Row Total' to it's original representation ('$$$_row_total_$$$')
 * @param rawConfig is the raw api response for series color overrides
 * @returns series color overrides
 */

const SEPARATOR = ' - '

export const normalizePivotSeriesKeys = (rawConfig: {
  [key: string]: string
}) => {
  const entries = Object.entries(rawConfig).map(([key, val]) => {
    const pivotPos = key.lastIndexOf(SEPARATOR)
    const measureName = key.substring(pivotPos + SEPARATOR.length)
    const pivotValue = key.substring(0, pivotPos)

    const formattedKey =
      pivotPos > -1
        ? buildPivotMeasureName({
            measureName,
            pivotValue: pivotValue.replace(
              /Row Total/,
              '$$$$$$_row_total_$$$$$$'
            ),
          })
        : key
    return [formattedKey, val]
  })
  return Object.fromEntries(entries)
}
