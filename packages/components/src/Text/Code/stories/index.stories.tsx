/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { Code } from '../Code'
export { default as Default } from './Default'

export default {
  argTypes,
  component: Code,
  parameters: { storyshots: { disable: true } },
  title: 'Stories/Code',
}
