/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import {
  defaultArgTypes as argTypes,
  disableStoryshot,
} from '@looker/storybook'
import { InputText } from '../InputText'

import Basic from './Basic'

disableStoryshot(Basic)

export { Basic }
export { default as BeforeAfter } from './BeforeAfter'
export { default as Placeholder } from './Placeholder'
export { default as Value } from './Value'
export { default as Disabled } from './Disabled'
export { default as Error } from './Error'
export { default as NoErrorIcon } from './NoErrorIcon'

export default {
  argTypes,
  component: InputText,
  title: 'Stories/InputText',
}
