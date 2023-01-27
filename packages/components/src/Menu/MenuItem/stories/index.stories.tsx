/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { MenuItem } from '../MenuItem'
export { default as Basic } from './Basic'
export { default as Detail } from './Detail'
export { default as Description } from './Description'
export { default as Icon } from './Icon'
export { default as WithTooltip } from './WithTooltip'
export { default as Artwork } from './Artwork'
export { default as Disabled } from './Disabled'
export { default as Selected } from './Selected'
export { default as Link } from './Link'

export default {
  argTypes,
  component: MenuItem,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/MenuItem',
}
