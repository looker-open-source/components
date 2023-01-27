/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { frCA as componentsLocale } from '@looker/components'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Debug: {
    Config: 'Config.',
    Dimensions: 'Dimensions',
    Error: 'Erreur',
    Measures: 'Mesures',
    Result: 'Résultat',
    error: 'erreur',
    ok: 'ok',
  },
  ErrorBoundary: {
    'Something went wrong': 'Un problème est survenu',
  },
  translation: {
    'Row Total': 'Total des lignes',
    false: 'faux',
    null: 'nul',
    true: 'vrai',
    undefined: 'undefined',
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Total des lignes',
  },
}

export const frCA = mergeLocaleObjects([componentsLocale], 'fr-CA', resources)
