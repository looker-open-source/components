/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import dateLocale from 'date-fns/locale/uk'
import { ukUA as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}':
      'Легенда, сторінка {{page}} із {{totalPages}}',
  },
  PieLegendControls: {
    'Next page': 'Наступна сторінка',
    'Previous page': 'Попередня сторінка',
  },
  XYTooltip: {
    'Points sized by': 'Точки відсортовано за',
  },
}

export const ukUA = mergeLocaleObjects(
  [visualizationsadaptersLocale],
  'uk-UA',
  resources,
  dateLocale
)
