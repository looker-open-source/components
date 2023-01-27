/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { Legend } from '../Legend'

export { default as Basic } from './Basic'

export default {
  argTypes,
  component: Legend,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/Legend',
}
