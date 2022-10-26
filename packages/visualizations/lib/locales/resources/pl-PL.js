import merge from 'lodash/merge';
import { plPL as visAdapterLocales } from '@looker/visualizations-adapters';
import { plPL as visTableLocales } from '@looker/visualizations-table';
import { plPL as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'Do składnika zapytania nie przekazano żadnych elementów podrzędnych',
    'Query component received both dashboard and query props': 'Składnik zapytania otrzymał zarówno właściwości pulpitu nawigacyjnego, jak i zapytania'
  },
  QueryError: {
    Error: 'Błąd'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Wskaźniki typu „data” nie są obecnie obsługiwane',
    'No chart found for type "{{type}}"': 'Nie znaleziono wykresu dla typu „{{type}}”'
  }
};
export const plPL = {
  locale: 'pl-PL',
  resources: {
    'pl-PL': merge({}, resources, visAdapterLocales.resources['pl-PL'], visTableLocales.resources['pl-PL'], visVisxLocales.resources['pl-PL'])
  }
};
//# sourceMappingURL=pl-PL.js.map