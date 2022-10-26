import merge from 'lodash/merge';
import { ltLT as visAdapterLocales } from '@looker/visualizations-adapters';
import { ltLT as visTableLocales } from '@looker/visualizations-table';
import { ltLT as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'Užklausos komponentui neperduoti antriniai elementai',
    'Query component received both dashboard and query props': 'Užklausos komponentas gavo ataskaitų srities ir užklausos savybes'
  },
  QueryError: {
    Error: 'Klaida'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Šiuo metu datos tipo matai nepalaikomi',
    'No chart found for type "{{type}}"': 'Nerasta „{{type}}“ tipo diagrama'
  }
};
export const ltLT = {
  locale: 'lt-LT',
  resources: {
    'lt-LT': merge({}, resources, visAdapterLocales.resources['lt-LT'], visTableLocales.resources['lt-LT'], visVisxLocales.resources['lt-LT'])
  }
};
//# sourceMappingURL=lt-LT.js.map