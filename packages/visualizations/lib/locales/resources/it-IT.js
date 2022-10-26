import merge from 'lodash/merge';
import { itIT as visAdapterLocales } from '@looker/visualizations-adapters';
import { itIT as visTableLocales } from '@looker/visualizations-table';
import { itIT as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'Nessun elemento secondario trasmesso al componente Query',
    'Query component received both dashboard and query props': 'Il componente query ha ricevuto sia la dashboard che gli oggetti di query'
  },
  QueryError: {
    Error: 'Errore'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Le misure di tipo “data” non sono attualmente supportate',
    'No chart found for type "{{type}}"': 'Nessun grafico trovato per il tipo "{{type}}"'
  }
};
export const itIT = {
  locale: 'it-IT',
  resources: {
    'it-IT': merge({}, resources, visAdapterLocales.resources['it-IT'], visTableLocales.resources['it-IT'], visVisxLocales.resources['it-IT'])
  }
};
//# sourceMappingURL=it-IT.js.map