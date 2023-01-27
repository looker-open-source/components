

import { svSE as componentsLocale } from '@looker/components';
import { svSE as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { svSE as visualizationstableLocale } from '@looker/visualizations-table';
import { svSE as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';
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
export const svSE = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale, visualizationstableLocale, visualizationsvisxLocale], 'sv-SE', resources);
//# sourceMappingURL=sv-SE.js.map