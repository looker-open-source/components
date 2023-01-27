/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { itIT as componentsLocale } from '@looker/components'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Debug: {
    Config: 'Config',
    Dimensions: 'Dimensioni',
    Error: 'Errore',
    Measures: 'Misure',
    Result: 'Risultato',
    error: 'errore',
    ok: 'ok',
  },
  ErrorBoundary: {
    'Something went wrong': 'Si è verificato un errore',
  },
  translation: {
    'Row Total': 'Totale di riga',
    false: 'falso',
    null: 'null',
    true: 'vero',
    undefined: 'non definito',
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Totale di riga',
  },
}

export const itIT = mergeLocaleObjects([componentsLocale], 'it-IT', resources)
