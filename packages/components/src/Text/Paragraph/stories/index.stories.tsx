/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { Paragraph } from '../Paragraph'
export { default as Default } from './Default'
export { default as Color } from './Color'
export { default as FontSize } from './FontSize'
export { default as FontWeight } from './FontWeight'
export { default as MultilineTruncate } from './MultilineTruncate'
export { default as TextAlign } from './TextAlign'
export { default as TextDecoration } from './TextDecoration'
export { default as TextTransform } from './TextTransform'
export { default as Truncate } from './Truncate'

export default {
  argTypes,
  component: Paragraph,
  parameters: { storyshots: { disable: true } },
  title: 'Stories/Paragraph',
}
