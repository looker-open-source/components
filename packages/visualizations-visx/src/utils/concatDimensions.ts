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
