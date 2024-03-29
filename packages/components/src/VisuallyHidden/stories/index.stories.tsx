/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { VisuallyHidden } from '../VisuallyHidden';

export { default as Basic } from './Basic';
export default {
  argTypes,
  component: VisuallyHidden,
  title: 'Stories/VisuallyHidden',
};
