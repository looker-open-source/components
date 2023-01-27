/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import dateLocale from 'date-fns/locale/cs'
import { csCZ as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}':
      'Stránka legendy {{page}} z {{totalPages}}',
  },
  PieLegendControls: {
    'Next page': 'Další stránka',
    'Previous page': 'Předchozí stránka',
  },
  XYTooltip: {
    'Points sized by': 'Velikost bodů podle',
  },
}

export const csCZ = mergeLocaleObjects(
  [visualizationsadaptersLocale],
  'cs-CZ',
  resources,
  dateLocale
)
