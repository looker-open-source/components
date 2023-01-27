/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { defaultArgTypes as argTypes } from '@looker/storybook'
import { FieldRadioGroup } from '../'
export { default as Basic } from './Basic'
export { default as Disabled } from './Disabled'
export { default as Required } from './Required'
export { default as Inline } from './Inline'
export { default as Error } from './Error'

export default {
  argTypes,
  component: FieldRadioGroup,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/FieldRadioGroup',
}
