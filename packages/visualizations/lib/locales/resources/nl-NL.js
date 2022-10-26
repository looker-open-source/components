import merge from 'lodash/merge';
import { nlNL as visAdapterLocales } from '@looker/visualizations-adapters';
import { nlNL as visTableLocales } from '@looker/visualizations-table';
import { nlNL as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'Geen subonderdelen doorgevoerd naar querycomponent',
    'Query component received both dashboard and query props': 'Queryonderdeel heeft zowel dashboard- als queryeigenschappen ontvangen'
  },
  QueryError: {
    Error: 'Fout'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Meetwaarden van het type Datum worden momenteel niet ondersteund',
    'No chart found for type "{{type}}"': 'Geen grafiek gevonden voor type {{type}}'
  }
};
export const nlNL = {
  locale: 'nl-NL',
  resources: {
    'nl-NL': merge({}, resources, visAdapterLocales.resources['nl-NL'], visTableLocales.resources['nl-NL'], visVisxLocales.resources['nl-NL'])
  }
};
//# sourceMappingURL=nl-NL.js.map