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
  title: 'Visualizations/Single Value',
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
