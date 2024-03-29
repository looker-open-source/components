/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { FieldSlider } from '../../FieldSlider';

export { default as Basic } from './Basic';
export { default as Disabled } from './Disabled';
export { default as Steps } from './Steps';
export { default as FloatingSteps } from './FloatingSteps';
export { default as Controlled } from './Controlled';
export default {
  argTypes,
  component: FieldSlider,
  title: 'Stories/FieldSlider',
};
