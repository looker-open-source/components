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
import { Visualization } from '../Visualization'
import type {
  Fields,
  PieProps,
  SDKRecord,
} from '@looker/visualizations-adapters'
import {
  mockSdkDataResponse,
  tabularResponse,
  buildChartConfig,
} from '@looker/visualizations-adapters'

const defaultPieData: SDKRecord[] = [
  {
    'orders.count': 3087,
    'users.state': 'California',
  },
  {
    'orders.count': 2515,
    'users.state': 'New York',
  },

  {
    'orders.count': 1234,
    'users.state': 'Oregon',
  },
]

const defaultPieFields: Fields = {
  measures: [
    {
      is_numeric: true,
      label: 'Orders Count',
      label_short: 'Count',
      name: 'orders.count',
      sortable: true,
      type: 'count_distinct',
      view: 'orders',
      view_label: 'Orders',
      value_format: null,
    },
  ],
  dimensions: [
    {
      is_filter: false,
      is_fiscal: false,
      is_numeric: false,
      is_timeframe: true,
      label: 'Users State',
      label_short: 'State',
      name: 'users.state',
      sortable: true,
      type: 'string',
      view: 'users',
      view_label: 'Users',
      value_format: null,
    },
  ],
}

export default {
  component: Visualization,
  title: 'Visualizations/Pie',
}

const Template: Story<Partial<PieProps>> = ({
  config: configProp,
  data = defaultPieData,
  fields = defaultPieFields,
  ...restProps
}) => {
  return (
    <Visualization
      config={buildChartConfig({
        config: { type: 'pie', ...configProp },
        data,
        fields,
      })}
      data={data}
      fields={fields}
      {...restProps}
    />
  )
}

export const Pie = Template.bind({})
Pie.args = {}

export const ColorOverrides = Template.bind({})
ColorOverrides.args = {
  config: { type: 'pie', series: [{ color: '#fa8072' }, { color: '#74BDCB' }] },
}

export const MaxDataRender = Template.bind({})
MaxDataRender.args = {
  data: tabularResponse(mockSdkDataResponse),
  fields: {
    ...defaultPieFields,
    dimensions: [
      { ...defaultPieFields.dimensions[0], name: 'orders.created_date' },
    ],
  },
}

export const LegendBottom = Template.bind({})
LegendBottom.args = {
  config: {
    legend: { position: 'bottom', value: 'label' },
    series: {},
    type: 'pie',
  },
}
LegendBottom.parameters = {
  storyshots: { disable: true },
}

export const LegendBottomMaxDataRender = Template.bind({})
LegendBottomMaxDataRender.args = {
  data: tabularResponse(mockSdkDataResponse),
  fields: {
    ...defaultPieFields,
    dimensions: [
      { ...defaultPieFields.dimensions[0], name: 'orders.created_date' },
    ],
  },
  config: {
    legend: { position: 'bottom', value: 'label_value' },
    series: {},
    type: 'pie',
  },
}

export const NoLegend = Template.bind({})
NoLegend.args = {
  config: { type: 'pie', legend: false, series: {} },
}
NoLegend.parameters = {
  storyshots: { disable: true },
}

export const Labels = Template.bind({})
Labels.args = {
  config: {
    legend: { type: 'labels', value: 'label_value' },
    series: {},
    type: 'pie',
  },
}
