/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import dateLocale from 'date-fns/locale/fr-CA'
import { frCA as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}':
      'Page de légende {{page}} sur {{totalPages}}',
  },
  PieLegendControls: {
    'Next page': 'Page suivante',
    'Previous page': 'Page précédente',
  },
  XYTooltip: {
    'Points sized by': 'Taille des points selon',
  },
}

export const frCA = mergeLocaleObjects(
  [visualizationsadaptersLocale],
  'fr-CA',
  resources,
  dateLocale
)
