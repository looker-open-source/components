/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { ukUA as componentsLocale } from '@looker/components'
import { ukUA as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      'Натисніть, утримуючи Shift, щоб сортувати додаткові стовпці',
    'Sort ascending': 'Сортувати за зростанням',
    'Sort descending': 'Сортувати за спаданням',
    Totals: 'Підсумки',
  },
}

export const ukUA = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'uk-UA',
  resources
)
