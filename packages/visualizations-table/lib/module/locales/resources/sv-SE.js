

import { svSE as componentsLocale } from '@looker/components';
import { svSE as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Skift + klicka för att sortera ytterligare kolumner',
    'Sort ascending': 'Sortera stigande',
    'Sort descending': 'Sortera fallande',
    Totals: 'Totalsummor'
  }
};
export const svSE = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale], 'sv-SE', resources);
//# sourceMappingURL=sv-SE.js.map