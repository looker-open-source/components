/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { ProgressCircular } from '../ProgressCircular'
export { default as Default } from './Default'
export { default as DeterminateProgress } from './DeterminateProgress'
export { default as Size } from './Size'

export default {
  argTypes,
  component: ProgressCircular,
  parameters: { storyshots: { disable: true } },
  title: 'Stories/ProgressCircular',
}
