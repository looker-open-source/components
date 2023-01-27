/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { en as componentsLocale } from '@looker/components'
import { mergeLocaleObjects } from '@looker/i18n'

const resources = {
  Debug: {
    Config: 'Config',
    Dimensions: 'Dimensions',
    Error: 'Error',
    Measures: 'Measures',
    Result: 'Result',
    error: 'error',
    ok: 'ok',
  },
  ErrorBoundary: {
    'Something went wrong': 'Something went wrong',
  },
  translation: {
    'Row Total': 'Row Total',
    false: 'false',
    null: 'null',
    true: 'true',
    undefined: 'undefined',
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Row Total',
  },
}

export const en = mergeLocaleObjects([componentsLocale], 'en', resources)
