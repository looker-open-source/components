/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { nbNO as componentsLocale } from '@looker/components'
import { nbNO as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { nbNO as visualizationstableLocale } from '@looker/visualizations-table'
import { nbNO as visualizationsvisxLocale } from '@looker/visualizations-visx'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Query: {
    'No children passed to Query component':
      'Ingen underordnede elementer ble sendt til spørrings-komponenten',
    'Query component received both dashboard and query props':
      'Spørringskomponenten mottok både instrumentbord og spørringsrekvisitter',
  },
  QueryError: {
    Error: 'Feil',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      'Mål av typen dato støttes for øyeblikket ikke',
    'No chart found for type "{{type}}"':
      'Ingen diagrammer funnet for type «{{type}}»',
  },
}

export const nbNO = mergeLocaleObjects(
  [
    componentsLocale,
    visualizationsadaptersLocale,
    visualizationstableLocale,
    visualizationsvisxLocale,
  ],
  'nb-NO',
  resources
)
