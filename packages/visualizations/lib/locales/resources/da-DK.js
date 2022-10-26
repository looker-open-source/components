import merge from 'lodash/merge';
import { daDK as visAdapterLocales } from '@looker/visualizations-adapters';
import { daDK as visTableLocales } from '@looker/visualizations-table';
import { daDK as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'Ingen underordnet er videreført til forespørgselskomponent',
    'Query component received both dashboard and query props': 'Forespørgselskomponenten har modtaget både dashboard- og forespørgsels-props'
  },
  QueryError: {
    Error: 'Fejl'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": "Mål af typen 'dato' understøttes ikke i øjeblikket",
    'No chart found for type "{{type}}"': 'Der blev ikke fundet noget diagram for typen "{{type}}"'
  }
};
export const daDK = {
  locale: 'da-DK',
  resources: {
    'da-DK': merge({}, resources, visAdapterLocales.resources['da-DK'], visTableLocales.resources['da-DK'], visVisxLocales.resources['da-DK'])
  }
};
//# sourceMappingURL=da-DK.js.map