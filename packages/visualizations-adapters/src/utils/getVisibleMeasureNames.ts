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

import isArray from 'lodash/isArray'
import { DEFAULT_EMPTY_FIELDS } from '.'
import type { CCartesian, Fields } from '../types'

/**
 * This function extracts measure names of visible measures from the fields object.
 *
 * @param fields is the Fields response as returned by the SDK
 * @returns an array of strings names
 */

export const getVisibleMeasureNames = (
  fields: Fields = DEFAULT_EMPTY_FIELDS,
  config: CCartesian
): string[] => {
  const { measures = [] } = fields

  const visibleMeasures = measures.filter((measure, index) => {
    /**
     * Because config.series is optional, we need to check for its existence
     * before including it in visibility logic.
     */
    if (config.series) {
      return isArray(config.series)
        ? config?.series?.[index]?.visible
        : config?.series?.[measure.name]?.visible
    }

    /**
     * If we get here, we don't have enough information to hide the given series,
     * so just return true
     */
    return true
  })

  return visibleMeasures.map((measure) => measure.name)
}
