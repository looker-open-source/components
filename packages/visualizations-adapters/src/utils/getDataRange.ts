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

import isArray from 'lodash/isArray'
import add from 'lodash/add'
import get from 'lodash/get'
import type {
  CCartesian,
  Fields,
  SDKRecord,
  CommonCartesianProperties,
} from '../types'

export type GetDataRangeProps = {
  config: CCartesian | CommonCartesianProperties
  data: SDKRecord[]
  fields: Fields
}

/**
 * Returns the minimum and maximum numeric value from a data array
 *
 * Used by XYChart types to calculate y-axis range
 */
export const getDataRange = ({
  config,
  data,
  fields,
}: GetDataRangeProps): [number, number] => {
  const positioning = get(config, ['positioning'], 'overlay')

  const eligibleMeasures = fields.measures
    .filter((measure, index) => {
      // Early exit if measure isn't numeric
      if (!measure.is_numeric) return false

      /**
       * Because config.series is optional, we need to check for its existence
       * before including it in visibility logic.
       */

      if (config.series) {
        return isArray(config.series)
          ? config?.series?.[index]?.visible
          : config?.series?.[measure.name]?.visible
      }

      /**
       * If we get here, we don't have enough information to hide the given series,
       * so just return true
       */
      return true
    })
    .map((measure) => measure.name)

  const range = data.reduce(
    (draftRange, datum) => {
      const [currentMin, currentMax] = draftRange as [number, number]
      const datumValues = eligibleMeasures.map((name) => datum[name])

      // add all datum values together when rendering in stacking mode
      const accumulatedValue: number = datumValues.reduce(add, 0)

      const newMax = Math.max(
        ...(positioning === 'stacked' ? [accumulatedValue] : datumValues),
        currentMax
      )
      const newMin = Math.min(
        ...(positioning === 'stacked' ? [accumulatedValue] : datumValues),
        currentMin
      )

      return [newMin, newMax]
    },
    [Infinity, -Infinity]
  ) as [number, number]

  return range
}
