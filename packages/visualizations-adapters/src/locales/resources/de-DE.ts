/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { deDE as componentsLocale } from '@looker/components'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Debug: {
    Config: 'Konfig',
    Dimensions: 'Dimensionen',
    Error: 'Fehler',
    Measures: 'Messwerte',
    Result: 'Ergebnis',
    error: 'Fehler',
    ok: 'OK',
  },
  ErrorBoundary: {
    'Something went wrong': 'Ein Fehler ist aufgetreten',
  },
  translation: {
    'Row Total': 'Zeilensumme',
    false: 'falsch',
    null: 'null',
    true: 'wahr',
    undefined: 'nicht definiert',
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Zeilensumme',
  },
}

export const deDE = mergeLocaleObjects([componentsLocale], 'de-DE', resources)
