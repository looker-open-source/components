import merge from 'lodash/merge';
import { fiFI as visAdapterLocales } from '@looker/visualizations-adapters';
import { fiFI as visTableLocales } from '@looker/visualizations-table';
import { fiFI as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'Yhtään lasta ei ole välitetty kyselykomponenttiin',
    'Query component received both dashboard and query props': 'Kyselykomponentti vastaanotti sekä hallintapaneeli- että kyselyominaisuuksia'
  },
  QueryError: {
    Error: 'Virhe'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": "Tyypin 'date' mittoja ei tällä hetkellä tueta",
    'No chart found for type "{{type}}"': 'Kaaviota ei löytynyt tyypille "{{type}}"'
  }
};
export const fiFI = {
  locale: 'fi-FI',
  resources: {
    'fi-FI': merge({}, resources, visAdapterLocales.resources['fi-FI'], visTableLocales.resources['fi-FI'], visVisxLocales.resources['fi-FI'])
  }
};
//# sourceMappingURL=fi-FI.js.map