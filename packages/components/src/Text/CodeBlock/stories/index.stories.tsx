/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { CodeBlock } from '../CodeBlock'
export { default as Basic } from './Basic'
export { default as Border } from './Basic'

export default {
  argTypes,
  component: CodeBlock,
  parameters: { storyshots: { disable: true } },
  title: 'Stories/CodeBlock',
}
