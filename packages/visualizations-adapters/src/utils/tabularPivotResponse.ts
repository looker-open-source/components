/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
