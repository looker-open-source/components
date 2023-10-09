/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { koKR as componentsLocale } from '@looker/components';
import { koKR as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      '추가 열을 정렬하려면 Shift 키를 누른 상태에서 클릭하세요.',
    'Sort ascending': '오름차순 정렬',
    'Sort descending': '내림차순 정렬',
    Totals: '총계',
  },
};

export const koKR = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'ko-KR',
  resources
);
