/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import type { Story } from '@storybook/react'
import { Checkbox } from '../Checkbox'

import MixedStates from './MixedStates'
;(MixedStates as Story).parameters = { storyshots: { disable: true } }

export { default as Basic } from './Basic'
export { default as Checked } from './Checked'
export { default as MixedChecked } from './MixedChecked'
export { default as Disabled } from './Disabled'
export { default as DisabledChecked } from './DisabledChecked'
export { default as DisabledCheckedMixed } from './DisabledCheckedMixed'
export { default as ReadOnly } from './ReadOnly'
export { default as ReadOnlyChecked } from './ReadOnlyChecked'
export { default as ReadOnlyCheckedMixed } from './ReadOnlyCheckedMixed'

export { MixedStates }

export default {
  component: Checkbox,
  title: 'Stories/Checkbox',
}
