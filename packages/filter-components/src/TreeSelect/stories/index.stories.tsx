/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { TreeSelect } from '../TreeSelect';
import { i18nResources } from '../../locales';

export { default as Basic } from './Basic';
export { default as WithoutDropdown } from './WithoutDropdown';
export { default as ShortcutTree } from './ShortcutTree';
export { default as Windowing } from './Windowing';
export default {
  component: TreeSelect,
  parameters: {
    i18nResources,
  },
  title: 'Filters/Stories/TreeSelect',
};
