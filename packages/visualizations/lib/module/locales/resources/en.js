

import { en as componentsLocale } from '@looker/components';
import { en as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { en as visualizationstableLocale } from '@looker/visualizations-table';
import { en as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';
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
export const en = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale, visualizationstableLocale, visualizationsvisxLocale], 'en', resources);
//# sourceMappingURL=en.js.map