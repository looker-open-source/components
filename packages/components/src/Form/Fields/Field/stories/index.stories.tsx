/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { defaultArgTypes as argTypes } from '@looker/storybook'
import { Field } from '../../Field'
export { default as Basic } from './Basic'
export default {
  argTypes,
  component: Field,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/Field',
}
