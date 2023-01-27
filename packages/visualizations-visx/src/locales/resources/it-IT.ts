/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import dateLocale from 'date-fns/locale/it'
import { itIT as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}':
      'Pagina {{page}} di {{totalPages}} della legenda',
  },
  PieLegendControls: {
    'Next page': 'Pagina successiva',
    'Previous page': 'Pagina precedente',
  },
  XYTooltip: {
    'Points sized by': 'Punti con dimensione specificata in base a',
  },
}

export const itIT = mergeLocaleObjects(
  [visualizationsadaptersLocale],
  'it-IT',
  resources,
  dateLocale
)
