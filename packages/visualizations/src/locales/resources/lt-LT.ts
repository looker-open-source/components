/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { ltLT as componentsLocale } from '@looker/components'
import { ltLT as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { ltLT as visualizationstableLocale } from '@looker/visualizations-table'
import { ltLT as visualizationsvisxLocale } from '@looker/visualizations-visx'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Query: {
    'No children passed to Query component':
      'Užklausos komponentui neperduoti antriniai elementai',
    'Query component received both dashboard and query props':
      'Užklausos komponentas gavo ataskaitų srities ir užklausos savybes',
  },
  QueryError: {
    Error: 'Klaida',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      'Šiuo metu datos tipo matai nepalaikomi',
    'No chart found for type "{{type}}"': 'Nerasta „{{type}}“ tipo diagrama',
  },
}

export const ltLT = mergeLocaleObjects(
  [
    componentsLocale,
    visualizationsadaptersLocale,
    visualizationstableLocale,
    visualizationsvisxLocale,
  ],
  'lt-LT',
  resources
)
