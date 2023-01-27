/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { csCZ as componentsLocale } from '@looker/components'
import { csCZ as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { csCZ as visualizationstableLocale } from '@looker/visualizations-table'
import { csCZ as visualizationsvisxLocale } from '@looker/visualizations-visx'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Query: {
    'No children passed to Query component':
      'Komponentě dotazu nebyly předány žádné podřízené položky',
    'Query component received both dashboard and query props':
      'Komponenta dotazu obdržela vlastnosti řídicího panelu i dotazu',
  },
  QueryError: {
    Error: 'Chyba',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      'Míry typu „datum“ nejsou aktuálně podporovány',
    'No chart found for type "{{type}}"':
      'Pro typ „{{type}}“ nebyl nalezen žádný graf',
  },
}

export const csCZ = mergeLocaleObjects(
  [
    componentsLocale,
    visualizationsadaptersLocale,
    visualizationstableLocale,
    visualizationsvisxLocale,
  ],
  'cs-CZ',
  resources
)
