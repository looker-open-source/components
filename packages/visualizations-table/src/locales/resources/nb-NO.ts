/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { nbNO as componentsLocale } from '@looker/components'
import { nbNO as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      'Skift + klikk for å sortere flere kolonner',
    'Sort ascending': 'Sorter stigende',
    'Sort descending': 'Sorter synkende',
    Totals: 'Summer',
  },
}

export const nbNO = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'nb-NO',
  resources
)
