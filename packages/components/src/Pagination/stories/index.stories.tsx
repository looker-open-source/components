/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Pagination } from '../Pagination';

export { default as Basic } from './Basic';
export { default as WithDataTable } from './WithDataTable';
export default {
  argTypes,
  component: Pagination,
  title: 'Stories/Pagination',
};
