/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { UnorderedList } from '..'
export { default as Basic } from './Basic'
export { default as Color } from './Color'
export { default as Bullet } from './Bullet'

export default {
  argTypes,
  component: UnorderedList,
  title: 'Stories/UnorderedList',
}
