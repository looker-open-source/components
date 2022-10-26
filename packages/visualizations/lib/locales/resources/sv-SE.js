import merge from 'lodash/merge';
import { svSE as visAdapterLocales } from '@looker/visualizations-adapters';
import { svSE as visTableLocales } from '@looker/visualizations-table';
import { svSE as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'Inga underordnade godkändes av sökfrågekomponenten',
    'Query component received both dashboard and query props': 'Sökfrågekomponenten tog emot både instrumentpanel och frågeförslag'
  },
  QueryError: {
    Error: 'Fel'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Mått av ”data”-typ stöds inte för tillfället',
    'No chart found for type "{{type}}"': 'Inget diagram hittades för typen "{{type}}"'
  }
};
export const svSE = {
  locale: 'sv-SE',
  resources: {
    'sv-SE': merge({}, resources, visAdapterLocales.resources['sv-SE'], visTableLocales.resources['sv-SE'], visVisxLocales.resources['sv-SE'])
  }
};
//# sourceMappingURL=sv-SE.js.map