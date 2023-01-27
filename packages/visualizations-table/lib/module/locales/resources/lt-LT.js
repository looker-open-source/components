

import { ltLT as componentsLocale } from '@looker/components';
import { ltLT as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Table: {
    'Shift + Click to sort additional columns': '„Shift + Click“, jei norite rūšiuoti papildomus stulpelius',
    'Sort ascending': 'Didėjančia tvarka',
    'Sort descending': 'Mažėjančia tvarka',
    Totals: 'Sumos'
  }
};
export const ltLT = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale], 'lt-LT', resources);
//# sourceMappingURL=lt-LT.js.map