

import { trTR as componentsLocale } from '@looker/components';
import { trTR as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Ek sütunları sıralamak için Shift + Click tuşlarına basın',
    'Sort ascending': 'Artan düzenle sırala',
    'Sort descending': 'Azalan düzende sırala',
    Totals: 'Toplamlar'
  }
};
export const trTR = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale], 'tr-TR', resources);
//# sourceMappingURL=tr-TR.js.map