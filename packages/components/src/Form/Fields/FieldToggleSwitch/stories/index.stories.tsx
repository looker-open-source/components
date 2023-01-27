/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { FieldToggleSwitch } from '../FieldToggleSwitch'

export { default as Basic } from './Basic'
export { default as Checked } from './Checked'
export { default as Controlled } from './Controlled'
export { default as DetailDescription } from './DetailDescription'
export { default as Disabled } from './Disabled'
export { default as DisabledChecked } from './DisabledChecked'
export { default as ReadOnly } from './ReadOnly'
export { default as RichDetailDescription } from './RichDetailDescription'
export { default as ValidationMessage } from './ValidationMessage'

export default {
  argTypes,
  component: FieldToggleSwitch,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/FieldToggleSwitch',
}
