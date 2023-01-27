

import { hiIN as componentsLocale } from '@looker/components';
import { hiIN as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Table: {
    'Shift + Click to sort additional columns': 'अतिरिक्त कॉलम को सॉर्ट करने के लिए Shift + क्लिक करें',
    'Sort ascending': 'आरोही में क्रमित करें',
    'Sort descending': 'अवरोही में क्रमित करें',
    Totals: 'योग'
  }
};
export const hiIN = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale], 'hi-IN', resources);
//# sourceMappingURL=hi-IN.js.map