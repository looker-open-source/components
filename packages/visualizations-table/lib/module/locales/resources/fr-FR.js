

import { frFR as componentsLocale } from '@looker/components';
import { frFR as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Maj + cliquez pour trier les colonnes supplémentaires',
    'Sort ascending': "Trier dans l'ordre croissant",
    'Sort descending': "Trier dans l'ordre décroissant",
    Totals: 'Totaux'
  }
};
export const frFR = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale], 'fr-FR', resources);
//# sourceMappingURL=fr-FR.js.map