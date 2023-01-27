/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { zhTW as componentsLocale } from '@looker/components'
import { zhTW as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { zhTW as visualizationstableLocale } from '@looker/visualizations-table'
import { zhTW as visualizationsvisxLocale } from '@looker/visualizations-visx'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Query: {
    'No children passed to Query component': '沒有傳遞至查詢元件的子項目',
    'Query component received both dashboard and query props':
      'Dashboard 和查詢屬性接收到的查詢元件',
  },
  QueryError: {
    Error: '錯誤',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      '目前不支援的「日期」類型量值',
    'No chart found for type "{{type}}"': '沒有「{{type}}」類型的圖表',
  },
}

export const zhTW = mergeLocaleObjects(
  [
    componentsLocale,
    visualizationsadaptersLocale,
    visualizationstableLocale,
    visualizationsvisxLocale,
  ],
  'zh-TW',
  resources
)
