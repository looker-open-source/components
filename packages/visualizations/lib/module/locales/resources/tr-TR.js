

import { trTR as componentsLocale } from '@looker/components';
import { trTR as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { trTR as visualizationstableLocale } from '@looker/visualizations-table';
import { trTR as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Query: {
    'No children passed to Query component': 'Sorgu bileşenine alt öğe geçmedi',
    'Query component received both dashboard and query props': 'Sorgu bileşeni hem pano hem sorgu özelliklerini aldı'
  },
  QueryError: {
    Error: 'Hata'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": '"Tarih" tür ölçümleri şu anda desteklenmiyor',
    'No chart found for type "{{type}}"': '"{{type}}" türü için grafik bulunamadı'
  }
};
export const trTR = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale, visualizationstableLocale, visualizationsvisxLocale], 'tr-TR', resources);
//# sourceMappingURL=tr-TR.js.map