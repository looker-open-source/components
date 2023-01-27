

import { deDE as componentsLocale } from '@looker/components';
import { deDE as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Zum Sortieren zusätzlicher Spalten Umschalttaste + klicken',
    'Sort ascending': 'In aufsteigender Reihenfolge sortieren',
    'Sort descending': 'In absteigender Reihenfolge sortieren',
    Totals: 'Summen'
  }
};
export const deDE = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale], 'de-DE', resources);
//# sourceMappingURL=de-DE.js.map