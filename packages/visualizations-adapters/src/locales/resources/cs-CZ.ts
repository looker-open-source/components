/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { csCZ as componentsLocale } from '@looker/components'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Debug: {
    Config: 'Konfigurovat',
    Dimensions: 'Dimenze',
    Error: 'Chyba',
    Measures: 'Míry',
    Result: 'Výsledek',
    error: 'chyba',
    ok: 'ok',
  },
  ErrorBoundary: {
    'Something went wrong': 'Došlo k chybě',
  },
  translation: {
    'Row Total': 'Řádkový součet',
    false: 'nepravda',
    null: 'prázdné',
    true: 'pravda',
    undefined: 'není definováno',
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Řádkový součet',
  },
}

export const csCZ = mergeLocaleObjects([componentsLocale], 'cs-CZ', resources)
