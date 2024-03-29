/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { InputFile } from '../InputFile';

export { default as Accept } from './Accept';
export { default as Basic } from './Basic';
export { default as ButtonText } from './ButtonText';
export { default as Placeholder } from './Placeholder';
export default {
  argTypes,
  component: InputFile,
  title: 'Stories/InputFile',
};
