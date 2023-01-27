/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { thTH as componentsLocale } from '@looker/components'
import { thTH as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      'Shift + Click เพื่อจัดเรียงคอลัมน์เพิ่มเติม',
    'Sort ascending': 'จัดเรียงจากน้อยไปมาก',
    'Sort descending': 'จัดเรียงจากมากไปน้อย',
    Totals: 'ยอดรวม',
  },
}

export const thTH = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'th-TH',
  resources
)
