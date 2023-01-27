/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { ruRU as componentsLocale } from '@looker/components'
import { ruRU as visualizationsadaptersLocale } from '@looker/visualizations-adapters'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Table: {
    'Shift + Click to sort additional columns':
      'Чтобы отсортировать дополнительные столбцы, щелкайте по ним, удерживая нажатой клавишу SHIFT',
    'Sort ascending': 'Сортировка по возрастанию',
    'Sort descending': 'Сортировка по убыванию',
    Totals: 'Сумма',
  },
}

export const ruRU = mergeLocaleObjects(
  [componentsLocale, visualizationsadaptersLocale],
  'ru-RU',
  resources
)
