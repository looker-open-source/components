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

import get from 'lodash/get'
import type { CTable, CTableSeries } from '../adapters'
import type { ConfigHelper } from '../types'

export type NamedSeries = { [k: string]: CTableSeries }

export const seriesCellVis: ConfigHelper<CTable> = ({ config, fields }) => {
  const { series_cell_visualizations, series, ...restConfig } = config

  const buildNamedSeries = (s?: NamedSeries) => {
    const namedSeries: NamedSeries = fields?.measures.reduce(
      (seriesConfig, { name }, i) => {
        // default true ONLY for the first measure, unless otherwise specified
        const cellVisDefault = i === 0
        const apiValue = get(
          series_cell_visualizations,
          [name, 'is_active'],
          cellVisDefault
        )
        const { cell_visualization = apiValue, ...restSeries } = s?.[name] || {}

        return {
          ...seriesConfig,
          [name]: { cell_visualization, ...restSeries },
        } as NamedSeries
      },

      {}
    )

    return namedSeries
  }

  return {
    config: {
      ...restConfig,
      series: Array.isArray(series) ? series : buildNamedSeries(series),
    },
    fields,
  }
}
