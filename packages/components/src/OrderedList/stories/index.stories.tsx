/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { OrderedList } from '../OrderedList'
export { default as Basic } from './Basic'
export { default as Letter } from './Letter'
export { default as Number } from './Number'

export default {
  argTypes,
  component: OrderedList,
  title: 'Stories/OrderedList',
}
