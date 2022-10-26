import merge from 'lodash/merge';
import { en as visAdapterLocales } from '@looker/visualizations-adapters';
import { en as visTableLocales } from '@looker/visualizations-table';
import { en as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'No children passed to Query component',
    'Query component received both dashboard and query props': 'Query component received both dashboard and query props'
  },
  QueryError: {
    Error: 'Error'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": "Measures of type 'date' are currently not supported",
    'No chart found for type "{{type}}"': 'No chart found for type "{{type}}"'
  }
};
export const en = {
  locale: 'en',
  resources: {
    en: merge({}, resources, visAdapterLocales.resources.en, visTableLocales.resources.en, visVisxLocales.resources.en)
  }
};
//# sourceMappingURL=en.js.map