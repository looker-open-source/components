/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
