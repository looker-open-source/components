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
import type { FC } from 'react'
import React, { useContext } from 'react'
import { ProgressCircular, Space, ComponentsProvider } from '@looker/components'
import { ThemeContext } from 'styled-components'
import { Table } from '@looker/visualizations-table'
import {
  Area,
  Bar,
  Column,
  Sparkline,
  Line,
  Scatter,
  Pie,
} from '@looker/visualizations-visx'
import { SingleValue } from '@looker/visualizations-single-value'
import {
  Debug,
  QueryContext,
  ErrorBoundary,
} from '@looker/visualizations-adapters'
import type {
  ChartLayoutProps,
  VisWrapperProps,
  SupportedChartTypes,
} from '@looker/visualizations-adapters'

export interface VisualizationProps extends VisWrapperProps, ChartLayoutProps {
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
  bar: Bar,
  column: Column,
  default: Table,
  line: Line,
  pie: Pie,
  scatter: Scatter,
  single_value: SingleValue,
  sparkline: Sparkline,
  table: Table,
}

const VisualizationComponent: FC<VisualizationProps> = ({
  debug,
  height,
  width,
}) => {
  const { ok, data = [], error, fields, totals, config, loading } = useContext(
    QueryContext
  )

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
        config={config}
        data={data}
        fields={fields}
        error={error}
      />
    )
  } else if (config?.type && fields?.measures.length) {
    const ChartComponent =
      defaultChartComponent[config.type as keyof SupportedChartTypes]

    return (
      <ChartComponent
        data={data}
        config={config}
        fields={fields}
        totals={totals}
        width={width}
        height={height}
      />
    )
  } else {
    return null
  }
}

export const Visualization: FC<VisualizationProps> = props => {
  const contextValues = useContext(QueryContext)

  const theme = useContext(ThemeContext)

  if (!theme) {
    // Recursively wrap Visualization in ComponentsProvider to ensure that
    // visualizations and adapters can be rendered outside of Looker Components context
    // without breaking.
    return (
      <ComponentsProvider>
        <Visualization {...props} />
      </ComponentsProvider>
    )
  }

  return (
    <ErrorBoundary contextValues={contextValues}>
      <VisualizationComponent {...props} />
    </ErrorBoundary>
  )
}
