

import { en as componentsLocale } from '@looker/components';
import { en as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Shift + Click to sort additional columns',
    'Sort ascending': 'Sort ascending',
    'Sort descending': 'Sort descending',
    Totals: 'Totals'
  }
};
export const en = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale], 'en', resources);
//# sourceMappingURL=en.js.map