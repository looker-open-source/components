/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { Panel } from '../Panel'
export { default as Basic } from './Basic'
export { default as CenterPlacement } from './CenterPlacement'
export { default as CloseLabel } from './CloseLabel'
export { default as Nested } from './Nested'
export { default as Open } from './Open'
export { default as Direction } from './Direction'
export { default as Hook } from './Hook'
export { default as IconToggle } from './IconToggle'
export { default as WithDrawer } from './WithDrawer'
export { default as WithTree } from './WithTree'
export { default as AnimationCallbacks } from './AnimationCallbacks'

export default {
  argTypes,
  component: Panel,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/Panel',
}
