/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { koKR as componentsLocale } from '@looker/components'
import { koKR as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      '더 많은 열을 정렬하려면 Shift를 누르고 클릭',
    'Sort ascending': '오름차순으로 정렬',
    'Sort descending': '내림차순으로 정렬',
    Totals: '총계',
  },
}

export const koKR = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'ko-KR',
  resources
)
