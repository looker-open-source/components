/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Story } from '@storybook/react'
import React from 'react'
import type { VisualizationPlaygroundProps } from '../VisualizationPlayground'
import { VisualizationPlayground } from '../VisualizationPlayground'

export default {
  component: VisualizationPlayground,
  title: 'Visualizations/Playground',
}

const Template: Story<VisualizationPlaygroundProps> = props => {
  return <VisualizationPlayground {...props} />
}

export const Playground = Template.bind({})
Playground.args = {}
Playground.parameters = {
  beforeScreenshot: async () => {
    // delay screenshot one frame to ensure sdk promise
    // has resolved and data was rendered
    await new Promise(resolve => setTimeout(resolve, 1000))
  },
}
