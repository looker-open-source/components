/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { LkFieldTree } from '../LkFieldTree'
export { default as Basic } from './Basic'

export default {
  argTypes,
  component: LkFieldTree,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/LkFieldTree',
}
