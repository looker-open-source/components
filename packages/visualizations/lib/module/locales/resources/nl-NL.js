

import { nlNL as componentsLocale } from '@looker/components';
import { nlNL as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { nlNL as visualizationstableLocale } from '@looker/visualizations-table';
import { nlNL as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';
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
export const nlNL = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale, visualizationstableLocale, visualizationsvisxLocale], 'nl-NL', resources);
//# sourceMappingURL=nl-NL.js.map