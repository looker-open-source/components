/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { ToggleSwitch } from '../ToggleSwitch';

export { default as Basic } from './Basic';
export { default as Checked } from './Checked';
export { default as Disabled } from './Disabled';
export default {
  argTypes,
  component: ToggleSwitch,
  title: 'Stories/ToggleSwitch',
};
