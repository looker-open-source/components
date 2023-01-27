/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { FieldChips } from '../../FieldChips'
export { default as Basic } from './Basic'
export { default as FloatingLabel } from './FloatingLabel'
export { default as Truncate } from './Truncate'
export { default as Overflow } from './Overflow'
export { default as AutoResize } from './AutoResize'
export { default as Description } from './Description'
export { default as Detail } from './Detail'
export { default as Validation } from './Validation'
export { default as Controlled } from './Controlled'

export default {
  argTypes,
  component: FieldChips,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/FieldChips',
}
