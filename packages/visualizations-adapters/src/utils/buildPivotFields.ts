/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
  const fieldsCopy = {
    ...fields,
    pivots: [...(fields?.pivots || [])],
  }

  fieldsCopy.measures = pivots.flatMap(({ key, label: pivotLabel }) => {
    return fields.measures.map((measureField) => {
      const pivotMeasureName = buildPivotMeasureName({
        measureName: measureField.name,
        pivotValue: key,
      })

      return {
        ...measureField,
        label_short: pivotLabel,
        name: pivotMeasureName,
        pivot_key: key,
        pivoted_label: `${measureField.label}: ${pivotLabel}`,
      } as MeasureMetadata
    })
  })

  return fieldsCopy
}
