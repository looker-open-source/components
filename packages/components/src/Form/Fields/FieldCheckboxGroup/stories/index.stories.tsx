/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { FieldCheckboxGroup } from '../../FieldCheckboxGroup'
export { default as Basic } from './Basic'
export { default as Disabled } from './Disabled'
export { default as DisabledOption } from './DisabledOption'
export { default as Required } from './Required'
export { default as Inline } from './Inline'
export { default as Validation } from './Validation'

export default {
  argTypes,
  component: FieldCheckboxGroup,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/FieldCheckboxGroup',
}
