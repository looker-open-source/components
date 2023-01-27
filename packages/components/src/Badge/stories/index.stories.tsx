/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { Badge } from '../Badge'
export { default as Intent } from './Intent'
export { default as Sizes } from './Sizes'
export default {
  argTypes,
  component: Badge,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/Badge',
}
