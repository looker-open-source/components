import merge from 'lodash/merge';
import { nbNO as visAdapterLocales } from '@looker/visualizations-adapters';
import { nbNO as visTableLocales } from '@looker/visualizations-table';
import { nbNO as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'Ingen underordnede elementer ble sendt til spørrings-komponenten',
    'Query component received both dashboard and query props': 'Spørringskomponenten mottok både instrumentbord og spørringsrekvisitter'
  },
  QueryError: {
    Error: 'Feil'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Mål av typen dato støttes for øyeblikket ikke',
    'No chart found for type "{{type}}"': 'Ingen diagrammer funnet for type «{{type}}»'
  }
};
export const nbNO = {
  locale: 'nb-NO',
  resources: {
    'nb-NO': merge({}, resources, visAdapterLocales.resources['nb-NO'], visTableLocales.resources['nb-NO'], visVisxLocales.resources['nb-NO'])
  }
};
//# sourceMappingURL=nb-NO.js.map