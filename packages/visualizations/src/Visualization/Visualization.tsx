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
import type { ReactElement } from 'react'
import { ComponentsProvider } from '@looker/components'
import { useTheme } from 'styled-components'
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
import { ErrorBoundary } from '@looker/visualizations-adapters'
import type {
  ChartLayoutProps,
  VisWrapperProps,
  SupportedChartTypes,
  SDKRecord,
  Fields,
  CAll,
  Pivots,
} from '@looker/visualizations-adapters'
import has from 'lodash/has'
import { QueryError } from '../QueryError'
import { useTranslation } from '../utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FunctionComponentType = (props: any) => ReactElement<any, any> | null
export interface VisualizationProps extends VisWrapperProps, ChartLayoutProps {
  /*
   * debug renders the raw query data and query config rather than the chart
   * @default false
   */
  data?: SDKRecord[]
  fields?: Fields
  config?: CAll
  totals?: Record<string, number>
  pivots?: Pivots
  chartTypeMap?: Record<string, FunctionComponentType>
}

export const defaultChartTypeMap: Record<
  keyof SupportedChartTypes | 'default',
  FunctionComponentType
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

const VisualizationComponent = ({
  height,
  width,
  data = [],
  fields,
  pivots,
  totals,
  config,
  chartTypeMap = {},
}: VisualizationProps) => {
  const { t } = useTranslation('Visualization')

  if (fields?.measures.some(measure => measure.type === 'date')) {
    throw new Error(t("Measures of type 'date' are currently not supported"))
  }

  // Merge user chart type overrides with our standard library
  const completeChartTypeMap = Object.assign(
    {},
    defaultChartTypeMap,
    chartTypeMap
  )

  if (has(completeChartTypeMap, config?.type || '')) {
    const ChartComponent =
      completeChartTypeMap[config?.type as keyof SupportedChartTypes]

    return (
      <ChartComponent
        data={data}
        config={config}
        fields={fields}
        totals={totals}
        pivots={pivots}
        width={width}
        height={height}
      />
    )
  } else {
    return (
      <QueryError
        message={t('No chart found for type "{{type}}"', {
          type: config?.type,
        })}
      />
    )
  }
}

export const Visualization = (props: VisualizationProps) => {
  const theme = useTheme()

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
    <ErrorBoundary {...props}>
      <VisualizationComponent {...props} />
    </ErrorBoundary>
  )
}
