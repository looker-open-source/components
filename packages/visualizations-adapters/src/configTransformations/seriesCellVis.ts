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

import get from 'lodash/get'
import type { CTable, CTableSeries } from '../adapters'
import type { ConfigHelper, ConfigHelperArgs } from '../types'

type ApiConfigWithOverrides = ConfigHelperArgs<CTable>['config']

const setSeriesCellVisStatus = (
  config: ApiConfigWithOverrides,
  measureName = '',
  i: number
) => {
  const cellVisDefault = i === 0
  const seriesBaseName = measureName.split('|')[0] // isolated value relevant to pivoted queries
  const apiValue = get(
    config,
    ['series_cell_visualizations', seriesBaseName, 'is_active'],
    cellVisDefault
  )
  return apiValue
}

export const seriesCellVis: ConfigHelper<CTable> = ({
  config,
  data,
  fields,
}) => {
  const { series = {}, ...restConfig } = config

  const buildArraySeries = (s: CTableSeries[] = []) => {
    const arraySeries = fields?.measures.map(({ name }, i) => {
      const defaultSeriesCellValue = setSeriesCellVisStatus(config, name, i)
      const { cell_visualization = defaultSeriesCellValue, ...restSeries } =
        s?.[i] || {}
      return { cell_visualization, ...restSeries }
    }, [])
    return arraySeries
  }

  const buildNamedSeries = (s: { [k: string]: CTableSeries } = {}) => {
    const namedSeries = fields.measures.reduce(
      (seriesConfig, { name }, i) => {
        const defaultSeriesCellValue = setSeriesCellVisStatus(config, name, i)
        const { cell_visualization = defaultSeriesCellValue, ...restSeries } =
          s?.[name] || {}
        return {
          ...seriesConfig,
          [name]: { cell_visualization, ...restSeries },
        }
      },

      {}
    )
    return namedSeries
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
