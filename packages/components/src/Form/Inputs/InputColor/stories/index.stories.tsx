/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { InputColor } from '../InputColor';
import ControlledColor from './ControlledColor';

export { default as Basic } from './Basic';
export { ControlledColor };
export { default as DefaultValue } from './DefaultValue';
export { default as Disabled } from './Disabled';
export { default as DisabledNoValue } from './DisabledNoValue';
export { default as ReadOnly } from './ReadOnly';
export default {
  argTypes,
  component: InputColor,
  title: 'Stories/InputColor',
};
