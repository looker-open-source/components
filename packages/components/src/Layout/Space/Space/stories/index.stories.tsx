/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { Space } from '..'
export { default as Around } from './Around'
export { default as Basic } from './Basic'
export { default as Between } from './Between'
export { default as Evenly } from './Evenly'
export { default as Gap } from './Gap'
export { default as Properties } from './Properties'
export { default as Reverse } from './Reverse'
export { default as SpaceCrush } from './SpaceCrush'

export default {
  argTypes,
  component: Space,
  parameters: {
    docs: { source: { type: 'dynamic' } },
    storyshots: { disable: true },
  },
  title: 'Stories/Space',
}
