

import { csCZ as componentsLocale } from '@looker/components';
import { csCZ as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Stisknutím Shift a současným kliknutím lze seřadit další sloupce',
    'Sort ascending': 'Seřadit vzestupně',
    'Sort descending': 'Seřadit sestupně',
    Totals: 'Součty'
  }
};
export const csCZ = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale], 'cs-CZ', resources);
//# sourceMappingURL=cs-CZ.js.map