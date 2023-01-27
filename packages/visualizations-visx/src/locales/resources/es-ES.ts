/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import dateLocale from 'date-fns/locale/es'
import { esES as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}':
      'Página de leyenda {{page}} de {{totalPages}}',
  },
  PieLegendControls: {
    'Next page': 'Página siguiente',
    'Previous page': 'Página anterior',
  },
  XYTooltip: {
    'Points sized by': 'Puntos medidos por',
  },
}

export const esES = mergeLocaleObjects(
  [visualizationsadaptersLocale],
  'es-ES',
  resources,
  dateLocale
)
