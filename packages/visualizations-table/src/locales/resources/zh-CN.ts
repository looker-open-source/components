/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { zhCN as componentsLocale } from '@looker/components'
import { zhCN as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      '按 Shift 键并单击，对其他列进行排序',
    'Sort ascending': '按升序排序',
    'Sort descending': '按降序排序',
    Totals: '总计',
  },
}

export const zhCN = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'zh-CN',
  resources
)
