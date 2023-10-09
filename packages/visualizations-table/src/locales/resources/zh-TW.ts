/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { zhTW as componentsLocale } from '@looker/components';
import { zhTW as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      '按住 Shift 鍵並按一下滑鼠，即可將其他資料欄排序',
    'Sort ascending': '遞增排序',
    'Sort descending': '遞減排序',
    Totals: '總計',
  },
};

export const zhTW = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'zh-TW',
  resources
);
