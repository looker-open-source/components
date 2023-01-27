/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { ruRU as componentsLocale } from '@looker/components'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Debug: {
    Config: 'Конфигурация',
    Dimensions: 'Поля dimension',
    Error: 'Ошибка',
    Measures: 'Поля measure',
    Result: 'Результат',
    error: 'ошибка',
    ok: 'ОК',
  },
  ErrorBoundary: {
    'Something went wrong': 'Произошла ошибка',
  },
  translation: {
    'Row Total': 'Сумма строки',
    false: 'false',
    null: 'null',
    true: 'true',
    undefined: 'undefined',
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Сумма строки',
  },
}

export const ruRU = mergeLocaleObjects([componentsLocale], 'ru-RU', resources)
