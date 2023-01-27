/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { PopoverFooter } from '../PopoverFooter'
export { default as Basic } from './Basic'
export { default as FooterClose } from './FooterClose'
export { default as FooterWithChildren } from './FooterWithChildren'

export default {
  argTypes,
  component: PopoverFooter,
  title: 'Stories/PopoverFooter',
}
