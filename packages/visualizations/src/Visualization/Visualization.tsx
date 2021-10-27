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
import type { FC } from 'react'
import React, { useContext, Suspense } from 'react'
import { ProgressCircular, Space } from '@looker/components'
import { Table } from '@looker/visualizations-table'
import { Area, Sparkline, Line, Scatter } from '@looker/visualizations-visx'
import {
  buildChartConfig,
  Debug,
  QueryContext,
  ErrorBoundary,
  Spinner,
  Unsupported,
  tabularResponse,
} from '@looker/visualizations-adapters'
import type {
  VisWrapperProps,
  SupportedChartTypes,
  CommonCartesianProperties,
} from '@looker/visualizations-adapters'
import has from 'lodash/has'

interface VisualizationProps extends VisWrapperProps {
  /*
   * debug renders the raw query data and query config rather than the chart
   * @default false
   */
  debug?: boolean
}

export const defaultChartComponent: Record<
  keyof SupportedChartTypes | 'default',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  FC<any>
> = {
  area: Area,
  bar: Unsupported,
  column: Unsupported,
  default: Unsupported,
  line: Line,
  pie: Unsupported,
  scatter: Scatter,
  sparkline: Sparkline,
  table: Table,
}

const VisualizationComponent: FC<VisualizationProps> = ({
  debug,
  height,
  width,
}) => {
  const {
    ok,
    data = [],
    error,
    fields,
    config: rawConfig,
    loading,
  } = useContext(QueryContext)

  if (loading) {
    return (
      <Space justifyContent="center" p="small">
        <ProgressCircular />
      </Space>
    )
  }

  if (debug || ok === false) {
    return (
      <Debug
        ok={ok}
        config={rawConfig}
        data={data}
        fields={fields}
        error={error}
      />
    )
  } else if (rawConfig && fields) {
    const config = buildChartConfig(rawConfig, fields)

    // immutably copy data to prevent mutations from bleeding into the rest of the system
    const dataCopy = tabularResponse(Array.from(data))

    if (has(config, 'x_axis') && dataCopy.length) {
      const xAxis = (config as CommonCartesianProperties)?.x_axis?.[0]

      if (xAxis?.reversed) {
        dataCopy.reverse()
      }
    }

    const ChartComponent = defaultChartComponent[config.type]

    return (
      <Suspense fallback={<Spinner />}>
        <ChartComponent
          data={dataCopy}
          config={config}
          fields={fields}
          width={width}
          height={height}
        />
      </Suspense>
    )
  } else {
    return null
  }
}

export const Visualization: FC<VisualizationProps> = props => {
  const contextValues = useContext(QueryContext)

  return (
    <ErrorBoundary contextValues={contextValues}>
      <VisualizationComponent {...props} />
    </ErrorBoundary>
  )
}