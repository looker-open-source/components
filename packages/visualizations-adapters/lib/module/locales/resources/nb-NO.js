

import { nbNO as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Debug: {
    Config: 'Konfig',
    Dimensions: 'Dimensjoner',
    Error: 'Feil',
    Measures: 'Mål',
    Result: 'Resultat',
    error: 'feil',
    ok: 'ok'
  },
  ErrorBoundary: {
    'Something went wrong': 'Noe gikk galt'
  },
  translation: {
    'Row Total': 'Radsum',
    false: 'falsk',
    null: 'null',
    true: 'sann',
    undefined: 'udefinert'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Radsum'
  }
};
export const nbNO = mergeLocaleObjects([componentsLocale], 'nb-NO', resources);
//# sourceMappingURL=nb-NO.js.map