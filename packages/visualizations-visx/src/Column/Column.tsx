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
import {
  DataProvider,
  BarSeries,
  XYChart,
  BarStack,
  BarGroup,
} from '@visx/xychart'
import type { AxisScaleOutput, AxisScale } from '@visx/axis'
import type { LinearScaleConfig } from '@visx/scale'
import type {
  ColumnProps,
  SDKRecord,
  CLineSeries,
} from '@looker/visualizations-adapters'
import { DEFAULT_HEIGHT, VisWrapper } from '@looker/visualizations-adapters'
import { XYLegend } from '../XYLegend'
import isArray from 'lodash/isArray'
import get from 'lodash/get'
import compact from 'lodash/compact'
import {
  concatDimensions,
  getX,
  getY,
  getYAxisRange,
  useAxis,
  useChartTheme,
  isValidChartData,
} from '../utils'
import { XYTooltip } from '../XYTooltip'
import { Grid } from '../Grid'

export const Column = ({
  data,
  config,
  height = DEFAULT_HEIGHT,
  width,
  fields,
}: ColumnProps) => {
  const { positioning, series: seriesList, legend } = config

  /**
   * The concatDimensions call will further format the data array returned from
   * the tabularReponse call. This new array combines existing dimension properties
   * with a single `dimension` property.
   */
  const formattedData = concatDimensions(data, fields)

  const { XAxis, YAxis, chartMargin } = useAxis({
    config,
    data: formattedData,
    fields,
  })

  const chartTheme = useChartTheme(seriesList)

  // Early return if the data response is insufficient
  if (!isValidChartData(data, fields)) {
    return null
  }

  const renderedColumns: JSX.Element[] | undefined = compact(
    fields.measures.map((measure, i) => {
      const series: CLineSeries = isArray(seriesList)
        ? get(config, ['series', i])
        : get(config, ['series', measure.name])

      if (!series.visible) return undefined

      return (
        <BarSeries<
          AxisScale<AxisScaleOutput>,
          AxisScale<AxisScaleOutput>,
          SDKRecord
        >
          key={i}
          dataKey={measure.name}
          data={formattedData}
          xAccessor={(d: SDKRecord) => getX(d)}
          yAccessor={(d: SDKRecord) => getY(d, i)}
        />
      )
    })
  )

  const domain =
    positioning === 'percent'
      ? [0, 1]
      : getYAxisRange({ config, data: formattedData, fields })

  const Y_SCALE: LinearScaleConfig<AxisScaleOutput> = {
    type: 'linear',
    ...(domain && { domain, zero: false }),
  }

  return (
    <DataProvider
      // these props have been moved from XYChart to DataProvider
      // this allows us to move DataContext up a level such that we can
      // render an HTML legend that uses DataContext and an SVG chart
      // without doing this you would have to render XYChart as a child
      // of XYChart, which would then require the legend to be SVG-based
      // because HTML cannot be a child of SVG
      xScale={{ type: 'band', paddingInner: 0.2 }}
      yScale={Y_SCALE}
      theme={chartTheme}
    >
      <VisWrapper legend={legend}>
        <XYChart margin={chartMargin} width={width} height={height}>
          <XAxis />
          <YAxis />
          <Grid config={config} />
          <XYTooltip
            config={config}
            data={formattedData}
            fields={fields}
            showDatumGlyph={false}
            snapToDatum={false}
          />
          {positioning === 'stacked' || positioning === 'percent' ? (
            <BarStack offset={positioning === 'percent' ? 'expand' : 'none'}>
              {renderedColumns}
            </BarStack>
          ) : (
            <BarGroup>{renderedColumns}</BarGroup>
          )}
        </XYChart>
        <XYLegend chartWidth={width} config={config} fields={fields} />
      </VisWrapper>
    </DataProvider>
  )
}
