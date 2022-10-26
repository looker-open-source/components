import merge from 'lodash/merge';
import { csCZ as visAdapterLocales } from '@looker/visualizations-adapters';
import { csCZ as visTableLocales } from '@looker/visualizations-table';
import { csCZ as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'Komponentě dotazu nebyly předány žádné podřízené položky',
    'Query component received both dashboard and query props': 'Komponenta dotazu obdržela vlastnosti řídicího panelu i dotazu'
  },
  QueryError: {
    Error: 'Chyba'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Míry typu „datum“ nejsou aktuálně podporovány',
    'No chart found for type "{{type}}"': 'Pro typ „{{type}}“ nebyl nalezen žádný graf'
  }
};
export const csCZ = {
  locale: 'cs-CZ',
  resources: {
    'cs-CZ': merge({}, resources, visAdapterLocales.resources['cs-CZ'], visTableLocales.resources['cs-CZ'], visVisxLocales.resources['cs-CZ'])
  }
};
//# sourceMappingURL=cs-CZ.js.map