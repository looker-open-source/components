/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import type { StoryObj } from '@storybook/react'
import { InputColor } from '../InputColor'
import ControlledColor from './ControlledColor'
;(ControlledColor as StoryObj).parameters = {
  storyshots: { disable: true },
}
export { default as Basic } from './Basic'
export { ControlledColor }
export { default as DefaultValue } from './DefaultValue'
export { default as Disabled } from './Disabled'
export { default as DisabledNoValue } from './DisabledNoValue'
export { default as ReadOnly } from './ReadOnly'

export default {
  argTypes,
  component: InputColor,
  title: 'Stories/InputColor',
}
