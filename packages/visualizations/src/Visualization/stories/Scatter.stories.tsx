/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Story } from '@storybook/react'
import React from 'react'
import { Visualization } from '../Visualization'
import type {
  ScatterProps,
  Fields,
  CScatter,
} from '@looker/visualizations-adapters'
import {
  buildChartConfig,
  mockSdkConfigResponse,
  mockSdkDataResponse,
  mockSdkFieldsResponse,
  tabularResponse,
} from '@looker/visualizations-adapters'

export default {
  component: Visualization,
  title: 'Visualizations/Stories/Scatter',
}

type StoryTemplateProps = Omit<ScatterProps, 'config' | 'fields' | 'data'> & {
  config: Omit<CScatter, 'type'>
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
      type: 'scatter',
    },
    data,
    fields: mockSdkFieldsResponse as Fields,
  })

  return (
    <Visualization
      config={config}
      data={data}
      fields={mockSdkFieldsResponse as Fields}
      {...restProps}
    />
  )
}

export const Scatter = Template.bind({})
Scatter.args = {
  height: 600,
  width: 800,
}

export const SizeBy = Template.bind({})
SizeBy.args = {
  height: 600,
  width: 800,
  config: {
    series: {
      'orders.count': { size_by: 'orders.average_total_amount_of_order_usd' },
    },
    y_axis: [{ range: [20, 75] }],
  },
}
