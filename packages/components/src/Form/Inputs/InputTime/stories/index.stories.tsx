/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook'
import { InputTime } from '../InputTime'

export { default as Basic } from './Basic'

export default {
  argTypes,
  component: InputTime,
  parameters: {
    storyshots: { disable: true },
  },
  title: 'Stories/InputTime',
}
