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

import type { MeasureMetadata, Fields, Pivots } from '../types'
import { buildPivotMeasureName } from '.'

/**
 * Creates a new fields metadata object, replacing the existing fields.measures
 * property with pivot metadata objects. These pivot metadata objects are identical
 * to normal measure metadata objects from the Looker SDK, but use the query's
 * pivot values to derive their label, key and other relevant metadata.
 */
export const buildPivotFields = ({
  fields,
  pivots,
}: {
  fields: Fields
  pivots: Pivots
}) => {
  const fieldsCopy = { ...fields }

  fieldsCopy.measures = pivots.flatMap(({ key, label: pivotLabel }) => {
    return fields.measures.map(measureField => {
      const pivotMeasureName = buildPivotMeasureName({
        measureName: measureField.name,
        pivotValue: key,
      })

      return {
        ...measureField,
        label_short: pivotLabel,
        name: pivotMeasureName,
        pivoted_label: `${measureField.label}: ${pivotLabel}`,
      } as MeasureMetadata
    })
  })

  return fieldsCopy
}
