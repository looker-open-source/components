/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { MenuList } from '../MenuList'
export { default as Basic } from './Basic'
export { default as Density } from './Density'

export default {
  argTypes,
  component: MenuList,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/MenuList',
}
