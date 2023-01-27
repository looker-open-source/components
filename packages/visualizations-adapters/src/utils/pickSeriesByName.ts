/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type {
  CCartesian,
  CSeriesBasic,
  CSeriesPoints,
  CSeriesLine,
  CSeriesSize,
  Fields,
} from '../types'
import findIndex from 'lodash/findIndex'
import isArray from 'lodash/isArray'

type AllSeriesAttributes = Partial<
  CSeriesBasic & CSeriesPoints & CSeriesLine & CSeriesSize
>

/**
 * A utility function made necessary by the reality that series can be
 * an array list or a key/value object.
 *
 * Returns a series that matches with the name provided in `key`
 *
 * @param fields standard fields object returned by SDK
 * @param config vis config object
 * @param key the string name we are searching for
 * @returns
 */

export const pickSeriesByName = (
  fields: Fields,
  config: CCartesian,
  key: string
): AllSeriesAttributes => {
  const { series: seriesList } = config
  if (isArray(seriesList)) {
    // Array series! Pick the series that correlates with where it appears in the Fields list.
    const seriesIndex = findIndex(fields.measures, {
      name: key,
    })

    return seriesList[seriesIndex]
  } else {
    // Key/Value object: return the series at name `key`
    return seriesList?.[key] || {}
  }
}
