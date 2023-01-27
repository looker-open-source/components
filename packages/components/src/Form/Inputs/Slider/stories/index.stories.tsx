/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { Slider } from '../'

export { default as Basic } from './Basic'
export { default as Controlled } from './Controlled'
export { default as Disabled } from './Disabled'
export { default as InvalidValue } from './InvalidValue'
export { default as Label } from './Label'
export { default as MinMaxValue } from './MinMaxValue'
export { default as Step } from './Step'

export default {
  argTypes,
  component: Slider,
  parameters: { storyshots: { disable: true } },
  title: 'Stories/Slider',
}
