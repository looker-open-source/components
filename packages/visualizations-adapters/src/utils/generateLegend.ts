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

import map from 'lodash/map'
import get from 'lodash/get'
import type { SDKRecord, CAll, Fields } from '../types'

const ENDASH = '\u2013'

export type Legend = {
  dimension: string
  measure: string
}

export const generateLegend = (
  fields: Fields = { dimensions: [], measures: [] },
  config: Partial<CAll>
): Legend => {
  const defaultDimensionLabel = map(
    fields.dimensions,
    (d: SDKRecord) => d.label
  ).join(` ${ENDASH} `)
  const defaultMeasureLabel = map(
    fields.measures,
    (m: SDKRecord) => m.label
  ).join(` ${ENDASH} `)

  return {
    dimension: get(config, 'x_axis_label', defaultDimensionLabel) as string,
    measure: get(config, 'y_axes[0].label', defaultMeasureLabel) as string,
  }
}
