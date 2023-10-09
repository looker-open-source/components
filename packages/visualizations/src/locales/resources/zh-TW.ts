/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { zhTW as componentsLocale } from '@looker/components';
import { zhTW as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { zhTW as visualizationstableLocale } from '@looker/visualizations-table';
import { zhTW as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  Query: {
    'No children passed to Query component': '沒有任何子項傳送至查詢元件',
    'Query component received both dashboard and query props':
      '查詢元件同時收到了資訊主頁和查詢屬性',
  },
  QueryError: {
    Error: '錯誤',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      '目前不支援類型為「date」的度量',
    'No chart found for type "{{type}}"': '沒有「{{type}}」類型的圖表',
  },
};

export const zhTW = mergeLocaleObjects(
  [
    componentsLocale,
    visualizationsadaptersLocale,
    visualizationstableLocale,
    visualizationsvisxLocale,
  ],
  'zh-TW',
  resources
);
