/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { FieldTime } from '../'

export { default as Basic } from './Basic'
export { default as Controlled } from './Controlled'
export { default as Disabled } from './Disabled'
export { default as FloatingLabel } from './FloatingLabel'
export { default as Required } from './Required'
export { default as TimeFormat } from './TimeFormat'
export { default as ValidationMessage } from './ValidationMessage'

export default {
  argTypes,
  component: FieldTime,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/FieldTime',
}
