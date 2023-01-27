/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { ptBR as componentsLocale } from '@looker/components'
import { ptBR as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      'Pressione Shift e clique para classificar colunas adicionais',
    'Sort ascending': 'Classificar em ordem crescente',
    'Sort descending': 'Classificar em ordem decrescente',
    Totals: 'Totais',
  },
}

export const ptBR = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'pt-BR',
  resources
)
