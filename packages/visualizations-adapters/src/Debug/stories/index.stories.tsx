/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Debug } from '../Debug';

export { default as Basic } from './Basic';
export default {
  argTypes,
  component: Debug,
  title: 'Visualizations/Stories/Debug',
};
