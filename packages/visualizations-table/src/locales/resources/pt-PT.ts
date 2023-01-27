/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { ptPT as componentsLocale } from '@looker/components'
import { ptPT as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      'Shift + Clique para ordenar as colunas adicionais',
    'Sort ascending': 'Ordem crescente',
    'Sort descending': 'Ordem decrescente',
    Totals: 'Totais',
  },
}

export const ptPT = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'pt-PT',
  resources
)
