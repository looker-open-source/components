/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { InlineInputText } from '../InlineInputText';
import ReadOnly from './ReadOnly';
import OverflowHiddenInlineInputText from './OverflowHiddenInlineInputText';

export { default as Basic } from './Basic';
export { default as Value } from './Value';
export { default as Placeholder } from './Placeholder';
export { default as Simple } from './Simple';
export { default as Disabled } from './Disabled';
export { ReadOnly, OverflowHiddenInlineInputText };

export default {
  argTypes,
  component: InlineInputText,
  title: 'Stories/InlineInputText',
};
