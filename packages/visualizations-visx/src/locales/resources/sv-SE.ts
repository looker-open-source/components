/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import dateLocale from 'date-fns/locale/sv'
import { svSE as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}':
      'Teckenförklaringssida {{page}} av {{totalPages}}',
  },
  PieLegendControls: {
    'Next page': 'Nästa sida',
    'Previous page': 'Föregående sida',
  },
  XYTooltip: {
    'Points sized by': 'Punktstorlekar efter',
  },
}

export const svSE = mergeLocaleObjects(
  [visualizationsadaptersLocale],
  'sv-SE',
  resources,
  dateLocale
)
