/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { Label } from '../Label'

export { default as Basic } from './Basic'
export { default as Typography } from './Typography'

export default {
  argTypes,
  component: Label,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/Label',
}
