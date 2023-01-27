/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { PageSize } from '../PageSize'
export { default as AlwaysVisible } from './AlwaysVisible'
export { default as Basic } from './Basic'

export default {
  argTypes,
  component: PageSize,
  title: 'Stories/PageSize',
}
