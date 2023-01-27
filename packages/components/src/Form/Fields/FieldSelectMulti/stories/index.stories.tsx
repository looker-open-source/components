/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { FieldSelectMulti } from '../../FieldSelectMulti'
export { default as Basic } from './Basic'
export { default as Description } from './Description'
export { default as Detail } from './Detail'
export { default as Validation } from './Validation'
export { default as Disabled } from './Disabled'
export { default as Required } from './Required'
export { default as FloatingLabel } from './FloatingLabel'
export { default as Values } from './Values'
export { default as FreeInput } from './FreeInput'
// http://b/259682253 Storybook unresponsive issue
// export { default as CustomIndicator } from './CustomIndicator'

export default {
  argTypes,
  component: FieldSelectMulti,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/FieldSelectMulti',
}
