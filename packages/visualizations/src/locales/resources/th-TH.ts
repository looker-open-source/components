/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { thTH as componentsLocale } from '@looker/components'
import { thTH as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { thTH as visualizationstableLocale } from '@looker/visualizations-table'
import { thTH as visualizationsvisxLocale } from '@looker/visualizations-visx'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Query: {
    'No children passed to Query component':
      'ไม่มีรายการรองที่ส่งผ่านไปยังองค์ประกอบการสืบค้น',
    'Query component received both dashboard and query props':
      'องค์ประกอบการสืบค้นได้รับคุณสมบัติของทั้งแดชบอร์ดและการสืบค้น',
  },
  QueryError: {
    Error: 'ข้อผิดพลาด',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      'ขณะนี้ไม่รองรับค่าวัดประเภท "วันที่"',
    'No chart found for type "{{type}}"': 'ไม่พบแผนภูมิสำหรับประเภท "{{type}}"',
  },
}

export const thTH = mergeLocaleObjects(
  [
    componentsLocale,
    visualizationsadaptersLocale,
    visualizationstableLocale,
    visualizationsvisxLocale,
  ],
  'th-TH',
  resources
)
