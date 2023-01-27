/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { esES as componentsLocale } from '@looker/components'
import { esES as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { esES as visualizationstableLocale } from '@looker/visualizations-table'
import { esES as visualizationsvisxLocale } from '@looker/visualizations-visx'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Query: {
    'No children passed to Query component':
      'No se pasó ningún elemento secundario al componente de consulta.',
    'Query component received both dashboard and query props':
      'El componente de consulta recibió propiedades de dashboard y de consulta.',
  },
  QueryError: {
    Error: 'Error',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      'Actualmente no se admiten las medidas del tipo "fecha".',
    'No chart found for type "{{type}}"':
      'No se encontró ningún gráfico para el tipo "{{type}}"',
  },
}

export const esES = mergeLocaleObjects(
  [
    componentsLocale,
    visualizationsadaptersLocale,
    visualizationstableLocale,
    visualizationsvisxLocale,
  ],
  'es-ES',
  resources
)
