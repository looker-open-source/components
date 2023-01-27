/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { fiFI as componentsLocale } from '@looker/components'
import { fiFI as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { fiFI as visualizationstableLocale } from '@looker/visualizations-table'
import { fiFI as visualizationsvisxLocale } from '@looker/visualizations-visx'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Query: {
    'No children passed to Query component':
      'Yhtään lasta ei ole välitetty kyselykomponenttiin',
    'Query component received both dashboard and query props':
      'Kyselykomponentti vastaanotti sekä hallintapaneeli- että kyselyominaisuuksia',
  },
  QueryError: {
    Error: 'Virhe',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      "Tyypin 'date' mittoja ei tällä hetkellä tueta",
    'No chart found for type "{{type}}"':
      'Kaaviota ei löytynyt tyypille "{{type}}"',
  },
}

export const fiFI = mergeLocaleObjects(
  [
    componentsLocale,
    visualizationsadaptersLocale,
    visualizationstableLocale,
    visualizationsvisxLocale,
  ],
  'fi-FI',
  resources
)
