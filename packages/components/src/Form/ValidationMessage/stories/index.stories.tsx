/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { ValidationMessage } from '../ValidationMessage';

export { default as Basic } from './Basic';
export default {
  argTypes,
  component: ValidationMessage,
  title: 'Stories/ValidationMessage',
};
