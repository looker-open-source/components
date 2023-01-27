/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { esES as componentsLocale } from '@looker/components'
import { esES as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      'Presione Mayús+clic para ordenar columnas adicionales.',
    'Sort ascending': 'Orden ascendente',
    'Sort descending': 'Orden descendente',
    Totals: 'Totales',
  },
}

export const esES = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'es-ES',
  resources
)
