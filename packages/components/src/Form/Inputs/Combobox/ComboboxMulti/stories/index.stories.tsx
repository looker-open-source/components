/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { ComboboxMulti } from '../..';

export { default as Basic } from './Basic';
export { default as Controlled } from './Controlled';
export { default as ControlledInputValue } from './ControlledInputValue';
export { default as CustomIndicator } from './CustomIndicator';
export { default as ListLayout } from './ListLayout';
export { default as NoIndicator } from './NoIndicator';
export default {
  argTypes,
  component: ComboboxMulti,
  title: 'Stories/ComboboxMulti',
};
