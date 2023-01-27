

import { plPL as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Debug: {
    Config: 'Konfig.',
    Dimensions: 'Wymiary',
    Error: 'Błąd',
    Measures: 'Miary',
    Result: 'Wynik',
    error: 'błąd',
    ok: 'ok'
  },
  ErrorBoundary: {
    'Something went wrong': 'Coś poszło nie tak'
  },
  translation: {
    'Row Total': 'Suma wiersza',
    false: 'fałsz',
    null: 'ma wartość null',
    true: 'prawda',
    undefined: 'niezdefiniowany'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Suma wiersza'
  }
};
export const plPL = mergeLocaleObjects([componentsLocale], 'pl-PL', resources);
//# sourceMappingURL=pl-PL.js.map