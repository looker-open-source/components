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
import React from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type {
  CAll,
  SupportedChartTypes,
  CScatterSeries,
  CTableSeries,
  CLineSeries,
  CSeriesBasic,
  CSeriesLine,
  CSeriesSize,
  Fields,
} from '@looker/visualizations-adapters'
import { isNumeric } from '@looker/visualizations-adapters'
import { Fieldset, Grid, Divider } from '@looker/components'
import { SeriesColor } from './SeriesColor'
import type { CColorSupported } from './SeriesColor'
import { SeriesVisible } from './SeriesVisible'
import type { CVisibleSupported } from './SeriesVisible'
import { SeriesLabel } from './SeriesLabel'
import type { CLabelSupported } from './SeriesLabel'
import { SeriesLineWidth } from './SeriesLineWidth'
import type { CLineWidthSupported } from './SeriesLineWidth'
import { SeriesPointShape } from './SeriesPointShape'
import type { CPointShapeSupported } from './SeriesPointShape'
import { SeriesPointStyle } from './SeriesPointStyle'
import type { CPointStyleSupported } from './SeriesPointStyle'
import { SeriesSizeBy } from './SeriesSizeBy'
import type { CSeriesSizeBySupported } from './SeriesSizeBy'
import { SeriesCellVisualization } from './SeriesCellVisualization'
import type { CCellVisualizationSupported } from './SeriesCellVisualization'
import partial from 'lodash/partial'
import set from 'lodash/set'
import styled from 'styled-components'

/**
 * A list of relevant charts that access this configuration
 */
type SupportedChartConfig = {
  type:
    | SupportedChartTypes['area']
    | SupportedChartTypes['bar']
    | SupportedChartTypes['column']
    | SupportedChartTypes['line']
    | SupportedChartTypes['pie']
    | SupportedChartTypes['scatter']
    | SupportedChartTypes['sparkline']
    | SupportedChartTypes['table']
    | SupportedChartTypes['single_value']
  series?: CScatterSeries | CTableSeries | CLineSeries
}

const renderFor: Array<SupportedChartConfig['type']> = [
  'area',
  'bar',
  'column',
  'line',
  'pie',
  'scatter',
  'sparkline',
  'table',
  'single_value',
]

export type SeriesProps = {
  config: SupportedChartConfig
  fields: Fields
  onConfigChange: Dispatch<SetStateAction<Partial<CAll>>>
}

export const Series = (props: SeriesProps) => {
  const { config, fields, onConfigChange } = props
  const { series = {} } = config

  if (!renderFor.includes(config.type)) {
    // Early return! Only render for supported charts
    return null
  }

  const handleChange = (
    seriesKey: string,
    newSeries: CSeriesBasic | CSeriesLine
  ) => {
    const draft = set({ ...config }, ['series', seriesKey], newSeries)
    onConfigChange(draft as CAll)
  }

  const seriesList: Array<[string, CSeriesBasic | CSeriesLine]> = Array.isArray(
    series
  )
    ? series.map((s, i) => [String(i), s])
    : Object.entries(series)

  return (
    <>
      {seriesList.map(([key, s], i) => {
        const handleSeriesChange = partial(handleChange, key)

        // Sparkline only renders the first series
        const seriesDisabled = config.type === 'sparkline' && i > 0

        return (
          <StyledFieldset
            legend={isNumeric(key) ? `Series: ${key}` : key}
            accordion
            defaultOpen={seriesDisabled === false}
            key={key}
          >
            <SeriesVisible
              chartType={config.type as CVisibleSupported['type']}
              series={s as CSeriesBasic}
              onSeriesChange={handleSeriesChange}
            />
            <SeriesColor
              chartType={config.type as CColorSupported['type']}
              series={s as CSeriesBasic}
              onSeriesChange={handleSeriesChange}
              disabled={seriesDisabled}
            />
            <SeriesLabel
              chartType={config.type as CLabelSupported['type']}
              series={s as CSeriesBasic}
              onSeriesChange={handleSeriesChange}
            />
            <SeriesLineWidth
              chartType={config.type as CLineWidthSupported['type']}
              series={s as CSeriesLine}
              onSeriesChange={handleSeriesChange}
              disabled={seriesDisabled}
            />
            <Grid columns={2}>
              <SeriesPointStyle
                chartType={config.type as CPointStyleSupported['type']}
                series={s as CSeriesLine}
                onSeriesChange={handleSeriesChange}
              />
              <SeriesPointShape
                chartType={config.type as CPointShapeSupported['type']}
                series={s as CSeriesLine}
                onSeriesChange={handleSeriesChange}
              />
            </Grid>
            <SeriesSizeBy
              chartType={config.type as CSeriesSizeBySupported['type']}
              fields={fields}
              series={s as CSeriesSize}
              onSeriesChange={handleSeriesChange}
            />
            <SeriesCellVisualization
              chartType={config.type as CCellVisualizationSupported['type']}
              series={s as CSeriesBasic}
              onSeriesChange={handleSeriesChange}
            />
            <Divider my="xxlarge" />
          </StyledFieldset>
        )
      })}
    </>
  )
}

const StyledFieldset = styled(Fieldset)`
  legend {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
