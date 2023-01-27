/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import dateLocale from 'date-fns/locale/pl'
import { plPL as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}':
      'Strona legendy {{page}} z {{totalPages}}',
  },
  PieLegendControls: {
    'Next page': 'Następna strona',
    'Previous page': 'Poprzednia strona',
  },
  XYTooltip: {
    'Points sized by': 'Punkty rozmiaru według',
  },
}

export const plPL = mergeLocaleObjects(
  [visualizationsadaptersLocale],
  'pl-PL',
  resources,
  dateLocale
)
