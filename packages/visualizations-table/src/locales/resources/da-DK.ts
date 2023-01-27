/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { daDK as componentsLocale } from '@looker/components'
import { daDK as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      'Skift + klik for at sortere yderligere kolonner',
    'Sort ascending': 'Sortér stigende',
    'Sort descending': 'Sortér faldende',
    Totals: 'Totaler',
  },
}

export const daDK = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'da-DK',
  resources
)
