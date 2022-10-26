import merge from 'lodash/merge';
import { deDE as visAdapterLocales } from '@looker/visualizations-adapters';
import { deDE as visTableLocales } from '@looker/visualizations-table';
import { deDE as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'Keine untergeordneten Elemente an Abfragekomponente übergeben',
    'Query component received both dashboard and query props': 'Abfragekomponente hat Dashboard- und Abfrageeigenschaften erhalten.'
  },
  QueryError: {
    Error: 'Fehler'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Messwerte des Typs „date“ werden zurzeit nicht unterstützt.',
    'No chart found for type "{{type}}"': 'Kein Diagramm für Typ „{{type}}“ gefunden'
  }
};
export const deDE = {
  locale: 'de-DE',
  resources: {
    'de-DE': merge({}, resources, visAdapterLocales.resources['de-DE'], visTableLocales.resources['de-DE'], visVisxLocales.resources['de-DE'])
  }
};
//# sourceMappingURL=de-DE.js.map