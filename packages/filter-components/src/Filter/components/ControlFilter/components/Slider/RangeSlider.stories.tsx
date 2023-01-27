/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react'
import type { Story } from '@storybook/react'

import { RangeSlider } from './RangeSlider'
import type { RangeSliderProps } from './types'

const Template: Story<RangeSliderProps> = (args) => <RangeSlider {...args} />

export const Basic = Template.bind({})
Basic.args = {
  value: { min: 0, max: 33 },
  options: {},
}

export default {
  title: 'Filters/Stories/RangeSlider',
  component: RangeSlider,
  argTypes: { onChange: { action: 'onChange' } },
}
