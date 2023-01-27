

import { hiIN as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Debug: {
    Config: 'कॉन्फ़िग',
    Dimensions: 'आयाम',
    Error: 'त्रुटि',
    Measures: 'माप',
    Result: 'परिणाम',
    error: 'त्रुटि',
    ok: 'ठीक है'
  },
  ErrorBoundary: {
    'Something went wrong': 'कुछ गड़बड़ी हुई'
  },
  translation: {
    'Row Total': 'कुल पंक्ति',
    false: 'ग़लत',
    null: 'नल',
    true: 'सही',
    undefined: 'अपरिभाषित'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'कुल पंक्ति'
  }
};
export const hiIN = mergeLocaleObjects([componentsLocale], 'hi-IN', resources);
//# sourceMappingURL=hi-IN.js.map