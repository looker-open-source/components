/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { thTH as componentsLocale } from '@looker/components'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Debug: {
    Config: 'กำหนดค่า',
    Dimensions: 'มิติ',
    Error: 'ข้อผิดพลาด',
    Measures: 'ค่าวัด',
    Result: 'ผลลัพธ์',
    error: 'ข้อผิดพลาด',
    ok: 'ตกลง',
  },
  ErrorBoundary: {
    'Something went wrong': 'มีสิ่งผิดปกติเกิดขึ้น',
  },
  translation: {
    'Row Total': 'ยอดรวมของแถว',
    false: 'เท็จ',
    null: 'เป็นค่าว่าง',
    true: 'จริง',
    undefined: 'ไม่ได้กำหนด',
  },
  useNormalizedPivotLabels: {
    'Row Total': 'ยอดรวมของแถว',
  },
}

export const thTH = mergeLocaleObjects([componentsLocale], 'th-TH', resources)
