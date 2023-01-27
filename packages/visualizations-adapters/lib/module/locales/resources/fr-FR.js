

import { frFR as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Debug: {
    Config: 'Config.',
    Dimensions: 'Dimensions',
    Error: 'Erreur',
    Measures: 'Mesures',
    Result: 'Résultat',
    error: 'erreur',
    ok: 'ok'
  },
  ErrorBoundary: {
    'Something went wrong': 'Un problème est survenu'
  },
  translation: {
    'Row Total': 'Total des lignes',
    false: 'false',
    null: 'nul',
    true: 'true',
    undefined: 'undefined'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Total des lignes'
  }
};
export const frFR = mergeLocaleObjects([componentsLocale], 'fr-FR', resources);
//# sourceMappingURL=fr-FR.js.map