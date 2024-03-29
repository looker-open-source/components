/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { FieldRangeSlider } from '../';
export { default as Basic } from './Basic';
export { default as Disabled } from './Disabled';
export { default as Steps } from './Steps';
export { default as Floating } from './Floating';
export { default as ReadOnly } from './ReadOnly';
export { default as Controlled } from './Controlled';
export { default as DashboardFilters } from './DashboardFilters';
export default {
  argTypes,
  component: FieldRangeSlider,
  title: 'Stories/FieldRangeSlider',
};
