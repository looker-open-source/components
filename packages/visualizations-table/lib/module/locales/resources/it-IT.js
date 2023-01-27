

import { itIT as componentsLocale } from '@looker/components';
import { itIT as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Maiusc + clic per ordinare colonne aggiuntive',
    'Sort ascending': 'Ordinamento crescente',
    'Sort descending': 'Ordinamento decrescente',
    Totals: 'Totali'
  }
};
export const itIT = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale], 'it-IT', resources);
//# sourceMappingURL=it-IT.js.map