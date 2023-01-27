/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
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
