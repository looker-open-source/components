/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { frCA as componentsLocale } from '@looker/components'
import { frCA as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { frCA as visualizationstableLocale } from '@looker/visualizations-table'
import { frCA as visualizationsvisxLocale } from '@looker/visualizations-visx'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Query: {
    'No children passed to Query component':
      'Pas d’enfant passé au composant de requête',
    'Query component received both dashboard and query props':
      'Le composant de requête a reçu à la fois le tableau de bord et les propriétés de requête',
  },
  QueryError: {
    Error: 'Erreur',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      'Les mesures de type « date » ne sont actuellement pas prises en charge',
    'No chart found for type "{{type}}"':
      'Aucun graphique trouvé pour le type « {{type}} »',
  },
}

export const frCA = mergeLocaleObjects(
  [
    componentsLocale,
    visualizationsadaptersLocale,
    visualizationstableLocale,
    visualizationsvisxLocale,
  ],
  'fr-CA',
  resources
)
