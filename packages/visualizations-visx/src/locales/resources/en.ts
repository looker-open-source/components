/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import dateLocale from 'date-fns/locale/en-US'
import { en as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}':
      'Legend page {{page}} of {{totalPages}}',
  },
  PieLegendControls: {
    'Next page': 'Next page',
    'Previous page': 'Previous page',
  },
  XYTooltip: {
    'Points sized by': 'Points sized by',
  },
}

export const en = mergeLocaleObjects(
  [visualizationsadaptersLocale],
  'en',
  resources,
  dateLocale
)
