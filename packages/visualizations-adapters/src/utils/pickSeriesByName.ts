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
