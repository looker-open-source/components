/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { plPL as componentsLocale } from '@looker/components'
import { plPL as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { plPL as visualizationstableLocale } from '@looker/visualizations-table'
import { plPL as visualizationsvisxLocale } from '@looker/visualizations-visx'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Query: {
    'No children passed to Query component':
      'Do składnika zapytania nie przekazano żadnych elementów podrzędnych',
    'Query component received both dashboard and query props':
      'Składnik zapytania otrzymał zarówno właściwości pulpitu nawigacyjnego, jak i zapytania',
  },
  QueryError: {
    Error: 'Błąd',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      'Wskaźniki typu „data” nie są obecnie obsługiwane',
    'No chart found for type "{{type}}"':
      'Nie znaleziono wykresu dla typu „{{type}}”',
  },
}

export const plPL = mergeLocaleObjects(
  [
    componentsLocale,
    visualizationsadaptersLocale,
    visualizationstableLocale,
    visualizationsvisxLocale,
  ],
  'pl-PL',
  resources
)
