/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import dateLocale from 'date-fns/locale/fi'
import { fiFI as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}':
      'Selitesivu {{page}}/{{totalPages}}',
  },
  PieLegendControls: {
    'Next page': 'Seuraava sivu',
    'Previous page': 'Edellinen sivu',
  },
  XYTooltip: {
    'Points sized by': 'Pisteet sovittanut',
  },
}

export const fiFI = mergeLocaleObjects(
  [visualizationsadaptersLocale],
  'fi-FI',
  resources,
  dateLocale
)
