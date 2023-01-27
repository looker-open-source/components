/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { FieldSelect } from '../../FieldSelect'
export { default as Basic } from './Basic'
export { default as Value } from './Value'
export { default as Disabled } from './Disabled'
export { default as Detail } from './Detail'
export { default as Description } from './Description'
export { default as Required } from './Required'
export { default as Error } from './Error'
export { default as Inline } from './Inline'
export { default as AutoResize } from './AutoResize'
export { default as CreateOption } from './CreateOption'
// http://b/259682253 Storybook unresponsive issue
// export { default as Validation } from './Validation'
// export { default as OptionIcons } from './OptionIcons'

export default {
  argTypes,
  component: FieldSelect,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/FieldSelect',
}
