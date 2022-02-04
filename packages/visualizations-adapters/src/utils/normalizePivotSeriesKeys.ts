/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

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
