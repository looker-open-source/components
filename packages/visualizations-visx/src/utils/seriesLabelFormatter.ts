/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { pickSeriesByName } from '@looker/visualizations-adapters'
import type {
  CCartesian,
  Fields,
  MeasureMetadata,
} from '@looker/visualizations-adapters'
import find from 'lodash/find'

/**
 * Return the properly formatted field name when provided a series key.
 *
 * @param fields the Fields object as returned by the sdk
 * @param series the config.series object or array
 * @param item a string representing the field name
 * @returns string
 */

export const seriesLabelFormatter = (
  fields: Fields,
  config: CCartesian,
  item: string
) => {
  const closestSeries = pickSeriesByName(fields, config, item)

  const field = find([...fields.measures, ...fields.dimensions], { name: item })

  const pivoted_label = field && (field as MeasureMetadata)?.pivoted_label

  const fallback = item.split('.').pop() || ''

  return (
    closestSeries.label ||
    pivoted_label ||
    field?.label ||
    fallback.replace(/_/g, ' ')
  )
}
