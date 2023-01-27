/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { ptBR as componentsLocale } from '@looker/components'
import { ptBR as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { ptBR as visualizationstableLocale } from '@looker/visualizations-table'
import { ptBR as visualizationsvisxLocale } from '@looker/visualizations-visx'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Query: {
    'No children passed to Query component':
      'Nenhum dependente passou para componente de consulta',
    'Query component received both dashboard and query props':
      'O componente de consulta recebeu propriedades de dashboard e consulta',
  },
  QueryError: {
    Error: 'Erro',
  },
  Visualization: {
    "Measures of type 'date' are currently not supported":
      'No momento, medidas do tipo “data” não são compatíveis',
    'No chart found for type "{{type}}"':
      'Não foram encontrados gráficos para o tipo “{{type}}”',
  },
}

export const ptBR = mergeLocaleObjects(
  [
    componentsLocale,
    visualizationsadaptersLocale,
    visualizationstableLocale,
    visualizationsvisxLocale,
  ],
  'pt-BR',
  resources
)
