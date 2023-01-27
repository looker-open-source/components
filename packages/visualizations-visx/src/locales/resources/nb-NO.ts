/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import dateLocale from 'date-fns/locale/nb'
import { nbNO as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}':
      'Forklaringsside {{page}} av {{totalPages}}',
  },
  PieLegendControls: {
    'Next page': 'Neste side',
    'Previous page': 'Forrige side',
  },
  XYTooltip: {
    'Points sized by': 'Poeng rangert etter',
  },
}

export const nbNO = mergeLocaleObjects(
  [visualizationsadaptersLocale],
  'nb-NO',
  resources,
  dateLocale
)
