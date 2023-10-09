/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import { frFR as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';

const resources = {
  Debug: {
    Config: 'Configuration',
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
  KeyValueList: {
    false: 'faux',
    null: 'nul',
    true: 'vrai',
    undefined: 'non défini',
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Total de ligne',
  },
};

export const frFR = mergeLocaleObjects([componentsLocale], 'fr-FR', resources);
