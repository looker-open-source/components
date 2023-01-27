/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { PopoverLayout } from '../PopoverLayout'
export { default as Basic } from './Basic'
export { default as FooterCloseButton } from './FooterCloseButton'
export { default as Full } from './Full'
export { default as Header } from './Header'
export { default as HeaderHideHeading } from './HeaderHideHeading'
export { default as NoFooter } from './NoFooter'

export default {
  argTypes,
  component: PopoverLayout,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/PopoverLayout',
}
