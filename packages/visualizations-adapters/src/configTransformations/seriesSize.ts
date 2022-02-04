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

import merge from 'lodash/merge'
import pick from 'lodash/pick'
import set from 'lodash/set'
import type { CScatter, CScatterSeries } from '../adapters'
import type { ConfigHelper, Fields } from '../types'
import { getMeasureNames } from '../utils'

type NamedSeries = { [key: string]: CScatterSeries }
type ArraySeries = CScatterSeries[]

/**
 * A small helper function to remove size by value if it references a field that doesn't
 * exist in the actual response.
 */
function removeInvalidSizeBy(
  series: CScatter['series'] = {},
  fields: Fields
): CScatter['series'] {
  const measureNames = getMeasureNames(fields)
  const entries = Object.entries(series || {})
  for (const [key, seriesEntry] of entries) {
    const { size_by } = seriesEntry
    set(
      series,
      [key, 'size_by'],
      size_by && measureNames.includes(size_by) ? size_by : false
    )
  }
  return series
}

/**
 * Populate series size_by attribute from the size_by_field response
 * Works with both named series and array series options.
 */
export const seriesSize: ConfigHelper<CScatter> = ({
  config,
  data,
  fields,
}) => {
  const { size_by_field, series = {}, ...restConfig } = config

  const measures = getMeasureNames(fields)

  const defaultSizeByValue =
    size_by_field && size_by_field.length ? size_by_field : false

  const buildNamedSeries = (s: NamedSeries) => {
    const namedSeries: NamedSeries = measures.reduce((seriesConfig, field) => {
      const currentFieldSettings = pick(s, field)
      const defaultSizeBy = { [field]: { size_by: defaultSizeByValue } }
      const draftSeries = merge(
        seriesConfig,
        defaultSizeBy,
        currentFieldSettings
      )

      return draftSeries
    }, {})

    return removeInvalidSizeBy(namedSeries, fields)
  }

  const buildArraySeries = (s: ArraySeries) => {
    const arraySeries = [...s]
    for (let i = 0; i < measures.length; i++) {
      const currentSeries = arraySeries[i] || {}
      const draftSeries: CScatterSeries = {
        size_by: defaultSizeByValue,
        ...currentSeries,
      }
      arraySeries[i] = draftSeries
    }
    return removeInvalidSizeBy(arraySeries, fields)
  }

  return {
    config: {
      series: Array.isArray(series)
        ? buildArraySeries(series)
        : buildNamedSeries(series),
      ...restConfig,
    },
    data,
    fields,
  }
}
