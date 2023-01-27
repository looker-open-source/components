/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Story } from '@storybook/react'
import React from 'react'
import { Visualization } from '../Visualization'
import type {
  Fields,
  SingleValueProps,
  CSingleValue,
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
  title: 'Visualizations/Stories/Single Value',
}

type StoryTemplateProps = Omit<
  SingleValueProps,
  'config' | 'fields' | 'data'
> & {
  config: Omit<CSingleValue, 'type'>
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
      type: 'single_value',
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

export const SingleValue = Template.bind({})
SingleValue.args = { height: 100 }

export const CustomLabel = Template.bind({})
CustomLabel.args = {
  height: 100,
  config: { series: [{ label: 'A Custom Label' }] },
}
