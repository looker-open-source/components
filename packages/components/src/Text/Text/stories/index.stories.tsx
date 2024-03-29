/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Text } from '../Text';

export { default as Basic } from './Basic';
export { default as LineHeight } from './LineHeight';
export { default as Nesting } from './Nesting';
export default {
  argTypes,
  component: Text,
  title: 'Stories/Text',
};
