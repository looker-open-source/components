/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { TextArea } from '../TextArea'
export { default as Basic } from './Basic'
export { default as Resize } from './Resize'
export { default as Disabled } from './Disabled'
export { default as Error } from './Error'
export { default as DefaultValue } from './DefaultValue'

export default {
  argTypes,
  component: TextArea,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/Textarea',
}
