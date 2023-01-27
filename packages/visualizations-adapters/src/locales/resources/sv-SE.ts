/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { svSE as componentsLocale } from '@looker/components'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Debug: {
    Config: 'Konfigurera',
    Dimensions: 'Dimensioner',
    Error: 'Fel',
    Measures: 'Mått',
    Result: 'Resultat',
    error: 'fel',
    ok: 'OK',
  },
  ErrorBoundary: {
    'Something went wrong': 'Något gick fel.',
  },
  translation: {
    'Row Total': 'Radsumma',
    false: 'falsk',
    null: 'null',
    true: 'sant',
    undefined: 'odefinierat',
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Radsumma',
  },
}

export const svSE = mergeLocaleObjects([componentsLocale], 'sv-SE', resources)
