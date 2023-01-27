/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { InputSearch } from '../InputSearch'

export { default as Basic } from './Basic'
export { default as AutoResize } from './AutoResize'
export { default as ClearIconLabel } from './ClearIconLabel'
export { default as Controlled } from './Controlled'
export { default as DefaultValue } from './DefaultValue'
export { default as Disable } from './Disable'
export { default as GroupedWindowing } from './GroupedWindowing'
export { default as HideSearchIcon } from './HideSearchIcon'
export { default as IsClearable } from './IsClearable'
export { default as Options } from './Options'
export { default as ReadOnly } from './ReadOnly'
export { default as Summary } from './Summary'

export default {
  argTypes,
  component: InputSearch,
  parameters: { storyshots: { disable: true } },
  title: 'Stories/InputSearch',
}
