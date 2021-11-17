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
import React from 'react'
import { defaultArgTypes as argTypes } from '../../../../../apps/storybook/src/defaultArgTypes'
import { Visualization } from '../Visualization'
import type { VisualizationProps } from '../Visualization'

export default {
  argTypes,
  component: Visualization,
  title: 'Bar',
}

const Template: Story<VisualizationProps> = ({ config, ...restProps }) => {
  return <Visualization config={{ ...config, type: 'bar' }} {...restProps} />
}

export const Bar = Template.bind({})
Bar.args = {
  height: 600,
  width: 800,
  config: { series: [{ visible: true }, { visible: true }] },
}

export const Stacked = Template.bind({})
Stacked.args = {
  height: 600,
  width: 800,
  config: {
    positioning: 'stacked',
    series: [{ visible: true }, { visible: true }],
  },
}

export const StackedPercentage = Template.bind({})
StackedPercentage.args = {
  height: 600,
  width: 800,
  config: {
    positioning: 'percent',
    series: [{ visible: true }, { visible: true }],
  },
}
