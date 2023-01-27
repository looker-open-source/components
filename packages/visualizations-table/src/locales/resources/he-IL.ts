/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { heIL as componentsLocale } from '@looker/components'
import { heIL as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      'Shift + לחיצה למיון עמודות נוספות',
    'Sort ascending': 'מיון בסדר עולה',
    'Sort descending': 'מיון בסדר יורד',
    Totals: 'סכומים',
  },
}

export const heIL = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'he-IL',
  resources
)
