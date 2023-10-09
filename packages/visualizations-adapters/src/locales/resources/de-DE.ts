/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { deDE as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  Debug: {
    Config: 'Konfiguration',
    Dimensions: 'Dimensionen',
    Error: 'Fehler',
    Measures: 'Messungen',
    Result: 'Ergebnis',
    error: 'Fehler',
    ok: 'Ok',
  },
  ErrorBoundary: {
    'Something went wrong': 'Ein Fehler ist aufgetreten',
  },
  KeyValueList: {
    false: 'falsch',
    null: 'null',
    true: 'wahr',
    undefined: 'nicht definiert',
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Zeile insgesamt',
  },
};

export const deDE = mergeLocaleObjects([componentsLocale], 'de-DE', resources);
