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

import type { Story } from '@storybook/react/types-6-0'
import React from 'react'
import omit from 'lodash/omit'
import { Visualization } from '../Visualization'
import type { Fields, LineProps, CLine } from '@looker/visualizations-adapters'
import {
  buildChartConfig,
  QueryContext,
  buildPivotFields,
  mockPivots,
  mockLineConfig,
  mockSdkConfigResponse,
  mockSdkDataResponse,
  mockSdkFieldsResponse,
  mockSdkPivotDataResponse,
  tabularResponse,
  tabularPivotResponse,
} from '@looker/visualizations-adapters'

export default {
  component: Visualization,
  title: 'Visualizations/Line',
}

type StoryTemplateProps = Omit<LineProps, 'config'> & {
  config: Omit<CLine, 'type'>
}

const Template: Story<StoryTemplateProps> = ({
  config: configProp,
  ...restProps
}) => {
  const data = tabularResponse([...mockSdkDataResponse])

  const config = buildChartConfig({
    config: {
      ...mockSdkConfigResponse,
      ...configProp,
      type: 'line',
    },
    data,
    fields: mockSdkFieldsResponse as Fields,
  })

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <QueryContext.Provider
      value={{
        config,
        ok: true,
        loading: false,
        data,
        fields: mockSdkFieldsResponse as Fields,
      }}
    >
      <Visualization height={600} width={800} {...restProps} />
    </QueryContext.Provider>
  )
}

export const Line = Template.bind({})
Line.args = {
  config: { series: [{ visible: true }, { visible: true }] },
}

export const PointStyleFilled = Template.bind({})
PointStyleFilled.args = {
  config: { series: [{ style: 'filled' }, { style: 'filled' }] },
}

export const PointStyleNone = Template.bind({})
PointStyleNone.args = {
  config: { series: [{ style: 'none' }, { style: 'none' }] },
}

export const Pivot = () => {
  const mockPivotFields = buildPivotFields({
    fields: {
      ...mockSdkFieldsResponse,
    } as Fields,
    pivots: mockPivots,
  })

  const mockPivotData = tabularPivotResponse({
    data: [...mockSdkPivotDataResponse],
    fields: {
      ...mockSdkFieldsResponse,
    } as Fields,
    pivots: mockPivots,
  })

  const config = buildChartConfig({
    config: { ...mockLineConfig, type: 'area' },
    data: mockPivotData,
    fields: mockPivotFields,
  })

  return (
    <QueryContext.Provider
      value={{
        config,
        ok: true,
        loading: false,
        data: mockPivotData,
        fields: mockPivotFields,
      }}
    >
      <Visualization height={600} width={800} />
    </QueryContext.Provider>
  )
}

export const DefaultYAxisSingleMeasure: Story<LineProps> = () => {
  const fields = {
    ...mockSdkFieldsResponse,
    measures: mockSdkFieldsResponse.measures.slice(0, 1), // removes the average measure field
  } as Fields

  const data = tabularResponse(
    [...mockSdkDataResponse].map(datum => {
      return omit(datum, 'orders.average_total_amount_of_order_usd')
    })
  )

  const config = buildChartConfig({
    config: {
      ...mockSdkConfigResponse,
      y_axes: undefined,
      type: 'line',
    },
    data,
    fields,
  })

  return (
    <QueryContext.Provider
      value={{
        config,
        ok: true,
        loading: false,
        data,
        fields,
      }}
    >
      <Visualization height={600} width={800} />
    </QueryContext.Provider>
  )
}
