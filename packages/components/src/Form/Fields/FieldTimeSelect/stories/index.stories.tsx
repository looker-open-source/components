/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { FieldTimeSelect } from '../'

export { default as Basic } from './Basic'
export { default as Controlled } from './Controlled'
export { default as Disabled } from './Disabled'
export { default as FloatingLabel } from './FloatingLabel'
export { default as Required } from './Required'
export { default as ValidationMessage } from './ValidationMessage'
export { default as ValidationMessageFloatingLabel } from './ValidationMessageFloatingLabel'

export default {
  argTypes,
  component: FieldTimeSelect,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/FieldTimeSelect',
}
