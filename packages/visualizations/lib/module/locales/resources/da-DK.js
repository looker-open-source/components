

import { daDK as componentsLocale } from '@looker/components';
import { daDK as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { daDK as visualizationstableLocale } from '@looker/visualizations-table';
import { daDK as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';
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
export const daDK = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale, visualizationstableLocale, visualizationsvisxLocale], 'da-DK', resources);
//# sourceMappingURL=da-DK.js.map