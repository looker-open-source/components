/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { defaultArgTypes as argTypes } from '@looker/storybook'
import { FieldRadio } from '../'
export { default as Basic } from './Basic'
export { default as DetailDescription } from './DetailDescription'
export { default as Checked } from './Checked'
export { default as Disabled } from './Disabled'
export { default as Error } from './Error'

export default {
  argTypes,
  component: FieldRadio,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/FieldRadio',
}
