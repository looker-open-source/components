import merge from 'lodash/merge';
import { trTR as visAdapterLocales } from '@looker/visualizations-adapters';
import { trTR as visTableLocales } from '@looker/visualizations-table';
import { trTR as visVisxLocales } from '@looker/visualizations-visx';
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
export const trTR = {
  locale: 'tr-TR',
  resources: {
    'tr-TR': merge({}, resources, visAdapterLocales.resources['tr-TR'], visTableLocales.resources['tr-TR'], visVisxLocales.resources['tr-TR'])
  }
};
//# sourceMappingURL=tr-TR.js.map