/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { FieldColor } from '../../FieldColor'
export { default as Basic } from './Basic'
export { default as Required } from './Required'
export { default as Disabled } from './Disabled'
export { default as FloatingLabel } from './FloatingLabel'
export { default as Controlled } from './Controlled'
export { default as Validation } from './Validation'

export default {
  argTypes,
  component: FieldColor,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/FieldColor',
}
