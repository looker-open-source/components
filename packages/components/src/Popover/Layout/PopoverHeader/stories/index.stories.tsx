/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { PopoverHeader } from '../PopoverHeader'
export { default as Basic } from './Basic'
export { default as Detail } from './Detail'
export { default as Hidden } from './Hidden'
export { default as HideClose } from './HideClose'

export default {
  argTypes,
  component: PopoverHeader,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/PopoverHeader',
}
