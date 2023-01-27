/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { itIT as componentsLocale } from '@looker/components'
import { itIT as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { itIT as visualizationstableLocale } from '@looker/visualizations-table'
import { itIT as visualizationsvisxLocale } from '@looker/visualizations-visx'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Query: {
    'No children passed to Query component':
      'Nessun elemento secondario trasmesso al componente Query',
    'Query component received both dashboard and query props':
      'Il componente query ha ricevuto sia la dashboard che gli oggetti di query',
  },
  QueryError: {
    Error: 'Errore',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      'Le misure di tipo “data” non sono attualmente supportate',
    'No chart found for type "{{type}}"':
      'Nessun grafico trovato per il tipo "{{type}}"',
  },
}

export const itIT = mergeLocaleObjects(
  [
    componentsLocale,
    visualizationsadaptersLocale,
    visualizationstableLocale,
    visualizationsvisxLocale,
  ],
  'it-IT',
  resources
)
