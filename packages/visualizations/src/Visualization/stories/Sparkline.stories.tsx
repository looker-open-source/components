/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Story } from '@storybook/react'
import React from 'react'
import { Visualization } from '../Visualization'
import type {
  Fields,
  SparklineProps,
  CSparkline,
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
  title: 'Visualizations/Stories/Sparkline',
}

type StoryTemplateProps = Omit<SparklineProps, 'config' | 'fields' | 'data'> & {
  config: Omit<CSparkline, 'type'>
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
      type: 'sparkline',
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

export const Sparkline = Template.bind({})
Sparkline.args = {}

export const LineWidth = Template.bind({})
LineWidth.args = {
  config: { series: [{ line_width: 15 }] },
}
