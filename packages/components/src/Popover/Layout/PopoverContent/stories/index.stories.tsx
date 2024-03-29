/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { PopoverContent } from '../PopoverContent';

export { default as Basic } from './Basic';
export { default as CustomPadding } from './CustomPadding';
export { default as Scroll } from './Scroll';
export default {
  argTypes,
  component: PopoverContent,
  title: 'Stories/PopoverContent',
};
