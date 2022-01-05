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

import type { Story } from '@storybook/react/types-6-0'
import omit from 'lodash/omit'
import React from 'react'
import { Visualization } from '../Visualization'
import type { VisualizationProps } from '../Visualization'
import type { Fields, CLine } from '@looker/visualizations-adapters'
import {
  QueryContext,
  buildPivotFields,
  mockPivots,
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

type LineVisualizationProps = Omit<VisualizationProps, 'config'> & {
  config: Omit<CLine, 'type'> // omit type from config object as that will be hard-coded in the template
}

const Template: Story<LineVisualizationProps> = ({ config, ...restProps }) => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <QueryContext.Provider
      value={{
        config: { ...mockSdkConfigResponse, y_axes: undefined },
        ok: true,
        loading: false,
        data: tabularResponse([...mockSdkDataResponse]),
        fields: { ...mockSdkFieldsResponse } as Fields,
      }}
    >
      <Visualization
        config={{ ...config, type: 'line' }}
        height={600}
        width={800}
        {...restProps}
      />
    </QueryContext.Provider>
  )
}

const PivotTemplate: Story<VisualizationProps> = ({ config, ...restProps }) => {
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

  return (
    <QueryContext.Provider
      value={{
        config: { ...mockSdkConfigResponse },
        ok: true,
        loading: false,
        data: mockPivotData,
        fields: mockPivotFields,
      }}
    >
      <Visualization
        config={{ ...config, type: 'line' }}
        height={600}
        width={800}
        {...restProps}
      />
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

export const Pivot = PivotTemplate.bind({})
Pivot.parameters = {
  storyshots: { disable: true },
}

export const DefaultYAxisSingleMeasure: Story<LineVisualizationProps> = () => (
  <QueryContext.Provider
    value={{
      config: { ...mockSdkConfigResponse, y_axes: undefined },
      ok: true,
      loading: false,
      // Need to filter out average measure values in each datum
      data: tabularResponse(
        [...mockSdkDataResponse].map(datum => {
          return omit(datum, 'orders.average_total_amount_of_order_usd')
        })
      ),
      fields: {
        ...mockSdkFieldsResponse,
        measures: mockSdkFieldsResponse.measures.slice(0, 1), // removes the average measure field
      } as Fields,
    }}
  >
    <Visualization config={{ type: 'line' }} height={600} width={800} />
  </QueryContext.Provider>
)
