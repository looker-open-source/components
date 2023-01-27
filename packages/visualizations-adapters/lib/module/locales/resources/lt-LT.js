

import { ltLT as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Debug: {
    Config: 'Konfigūracija',
    Dimensions: 'Matmenys',
    Error: 'Klaida',
    Measures: 'Priemonės',
    Result: 'Rezultatas',
    error: 'klaida',
    ok: 'gerai'
  },
  ErrorBoundary: {
    'Something went wrong': 'Įvyko klaida'
  },
  translation: {
    'Row Total': 'Eilutės sumos',
    false: 'neteisinga',
    null: 'negaliojantis',
    true: 'teisinga',
    undefined: 'neapibrėžta'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Eilutės sumos'
  }
};
export const ltLT = mergeLocaleObjects([componentsLocale], 'lt-LT', resources);
//# sourceMappingURL=lt-LT.js.map