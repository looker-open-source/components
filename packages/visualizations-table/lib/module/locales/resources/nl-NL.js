

import { nlNL as componentsLocale } from '@looker/components';
import { nlNL as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Shift + klik om aanvullende kolommen te sorteren',
    'Sort ascending': 'Oplopend sorteren',
    'Sort descending': 'Aflopend sorteren',
    Totals: 'Totalen'
  }
};
export const nlNL = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale], 'nl-NL', resources);
//# sourceMappingURL=nl-NL.js.map