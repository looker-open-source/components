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
import { buildPivotMeasureName, getDimensionNames, getMeasureNames } from '.'
import type { Fields, Pivots, SDKRecord } from '../types'

/**
 * Flattens a pivot query data response from the Looker API into an array of
 * 1-layer, tabularized data objects.
 *
 * Context: Measures look different in pivot queries where their values aren't
 * 1-level deep objects with "value" properties. Instead, they're objects
 * with keys reflective of a the pivot fields' values. We need to use the
 * pivots metadata from the query response to determine what those keys are
 * and then transform the values.
 */
export const tabularPivotResponse = ({
  data,
  fields,
  pivots,
}: {
  data: SDKRecord[]
  fields: Fields
  pivots: Pivots
}) =>
  data.map((datum) => {
    const formattedDatum: SDKRecord = {}

    const dimensionNames = getDimensionNames(fields)

    dimensionNames.forEach(
      (dimensionName) =>
        (formattedDatum[dimensionName] =
          datum[dimensionName] && datum[dimensionName].value)
    )

    const measureNames = getMeasureNames(fields)
    measureNames.forEach((measureName) => {
      const pivotValues = pivots.map((pivot) => pivot.key)
      pivotValues.forEach((pivotValue) => {
        formattedDatum[buildPivotMeasureName({ measureName, pivotValue })] =
          datum[measureName] && datum[measureName][pivotValue].value
      })
    })

    return formattedDatum
  })
