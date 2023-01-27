/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { defaultArgTypes as argTypes } from '@looker/storybook'
import { Chip } from '../Chip'
export { default as Basic } from './Basic'
export { default as ClickAndDelete } from './ClickAndDelete'
export { default as MaxWidth } from './MaxWidth'
export { default as Prefix } from './Prefix'
export { default as Removable } from './Removable'
export { default as IconLabel } from './IconLabel'

export default {
  argTypes,
  component: Chip,
  title: 'Stories/Chip',
}
