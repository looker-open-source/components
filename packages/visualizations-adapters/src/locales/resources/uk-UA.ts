/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { ukUA as componentsLocale } from '@looker/components'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Debug: {
    Config: 'Конфігурація',
    Dimensions: 'Поля dimension',
    Error: 'Помилка',
    Measures: 'Поля measure',
    Result: 'Результат',
    error: 'помилка',
    ok: 'ОК',
  },
  ErrorBoundary: {
    'Something went wrong': 'Виникла проблема',
  },
  translation: {
    'Row Total': 'Підсумок рядка',
    false: 'false',
    null: 'null',
    true: 'true',
    undefined: 'undefined',
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Підсумок рядка',
  },
}

export const ukUA = mergeLocaleObjects([componentsLocale], 'uk-UA', resources)
