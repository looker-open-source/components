/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { frCA as componentsLocale } from '@looker/components'
import { frCA as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      'Maj + cliquez pour trier les colonnes supplémentaires',
    'Sort ascending': 'Trier dans l’ordre croissant',
    'Sort descending': 'Trier dans l’ordre décroissant',
    Totals: 'Totaux',
  },
}

export const frCA = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'fr-CA',
  resources
)
