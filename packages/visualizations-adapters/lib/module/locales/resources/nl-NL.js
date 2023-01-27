

import { nlNL as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Debug: {
    Config: 'Configureren',
    Dimensions: 'Dimensies',
    Error: 'Fout',
    Measures: 'Maten',
    Result: 'Resultaat',
    error: 'fout',
    ok: 'OK'
  },
  ErrorBoundary: {
    'Something went wrong': 'Er is iets fout gegaan'
  },
  translation: {
    'Row Total': 'Rijtotaal',
    false: 'onwaar',
    null: 'ongeldig',
    true: 'waar',
    undefined: 'ongedefinieerd'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Rijtotaal'
  }
};
export const nlNL = mergeLocaleObjects([componentsLocale], 'nl-NL', resources);
//# sourceMappingURL=nl-NL.js.map