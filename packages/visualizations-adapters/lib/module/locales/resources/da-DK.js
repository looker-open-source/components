

import { daDK as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Debug: {
    Config: 'Konfigurer',
    Dimensions: 'Dimensioner',
    Error: 'Fejl',
    Measures: 'Mål',
    Result: 'Resultat',
    error: 'fejl',
    ok: 'OK'
  },
  ErrorBoundary: {
    'Something went wrong': 'Der gik noget galt'
  },
  translation: {
    'Row Total': 'Rækketotal',
    false: 'falsk',
    null: 'null',
    true: 'sand',
    undefined: 'ikke defineret'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Rækketotal'
  }
};
export const daDK = mergeLocaleObjects([componentsLocale], 'da-DK', resources);
//# sourceMappingURL=da-DK.js.map