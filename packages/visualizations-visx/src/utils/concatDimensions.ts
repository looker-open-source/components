/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type {
  SDKRecord,
  Fields,
  ChartData,
} from '@looker/visualizations-adapters'
import {
  getDimensionNames,
  getMeasureNames,
} from '@looker/visualizations-adapters'
import pick from 'lodash/pick'

/**
 * Concatenates dimension values and replaces all existing dimension properties in data with
 * a new formatted data array that has a single `dimension` property
 */
export const concatDimensions = (data: SDKRecord[], fields: Fields) => {
  const dimensionNames = getDimensionNames(fields)
  const measureNames = getMeasureNames(fields)

  const formattedData = data.map(datum => {
    const dimension = dimensionNames.map(name => datum[name]).join(' - ')

    return {
      dimension,
      ...pick(datum, measureNames),
    }
  })

  return formattedData as ChartData
}
