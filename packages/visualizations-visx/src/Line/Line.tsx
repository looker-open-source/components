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

import React, { Fragment } from 'react'
import { useTheme } from 'styled-components'
import { DataProvider, LineSeries, XYChart } from '@visx/xychart'
import type { AxisScaleOutput, AxisScale } from '@visx/axis'
import type { LinearScaleConfig } from '@visx/scale'
import type {
  LineProps,
  SDKRecord,
  CLineSeries,
} from '@looker/visualizations-adapters'
import { DEFAULT_HEIGHT, VisWrapper } from '@looker/visualizations-adapters'
import { XYLegend } from '../XYLegend'
import isArray from 'lodash/isArray'
import get from 'lodash/get'
import {
  concatDimensions,
  dimensionToDate,
  getX,
  getY,
  getYAxisRange,
  getSeriesColor,
  useAxis,
  useChartTheme,
  isValidChartData,
  isDateQuery,
} from '../utils'
import { XYTooltip } from '../XYTooltip'
import { Marker } from '../Marker'
import { Grid } from '../Grid'

export const Line = ({
  data,
  config,
  height = DEFAULT_HEIGHT,
  width,
  fields,
}: LineProps) => {
  const theme = useTheme()

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

  const chartTheme = useChartTheme(config.series)

  // Early return if the data response is insufficient
  if (!isValidChartData(data, fields)) {
    return null
  }

  const lines: JSX.Element[] | undefined = fields.measures.map((measure, i) => {
    const series: CLineSeries = isArray(config.series)
      ? get(config, ['series', i])
      : get(config, ['series', measure.name])

    if (!series?.visible) return <Fragment key={i}></Fragment>

    const { style, line_width, shape } = series
    const id = `marker-${shape}-${i}`

    return (
      <Fragment key={id}>
        {style !== 'none' && <Marker series={series} id={id} />}

        <LineSeries<
          AxisScale<AxisScaleOutput>,
          AxisScale<AxisScaleOutput>,
          SDKRecord
        >
          key={id}
          dataKey={measure.name}
          data={dimensionToDate(formattedData, fields)}
          stroke={getSeriesColor(series, theme)}
          strokeWidth={line_width}
          xAccessor={(d: SDKRecord) => getX(d)}
          yAccessor={(d: SDKRecord) => getY(d, i)}
          markerMid={`url(#${id})`}
          markerStart={`url(#${id})`}
          markerEnd={`url(#${id})`}
        />
      </Fragment>
    )
  })

  const domain = getYAxisRange({ config, data: formattedData, fields })

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
      xScale={{ type: isDateQuery(fields) ? 'time' : 'band' }}
      yScale={Y_SCALE}
      theme={chartTheme}
    >
      <VisWrapper legend={config.legend}>
        <XYChart margin={chartMargin} width={width} height={height}>
          <XAxis />
          <YAxis />
          <Grid config={config} />
          <XYTooltip config={config} data={formattedData} fields={fields} />
          {lines}
        </XYChart>
        <XYLegend chartWidth={width} config={config} fields={fields} />
      </VisWrapper>
    </DataProvider>
  )
}
