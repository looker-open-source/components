/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { NavTree } from '../NavTree';

export { default as Basic } from './Basic';
export { default as Link } from './Link';
export { default as ParentIcon } from './ParentIcon';
export default {
  argTypes,
  component: NavTree,
  title: 'Stories/NavTree',
};
