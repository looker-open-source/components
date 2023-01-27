

import { deDE as componentsLocale } from '@looker/components';
import { deDE as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { deDE as visualizationstableLocale } from '@looker/visualizations-table';
import { deDE as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Query: {
    'No children passed to Query component': 'Keine untergeordneten Elemente an Abfragekomponente weitergegeben',
    'Query component received both dashboard and query props': 'Abfragekomponente hat Dashboard- und Abfrageeigenschaften erhalten'
  },
  QueryError: {
    Error: 'Fehler'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Measures des Typs „Datum“ werden zur Zeit nicht unterstützt',
    'No chart found for type "{{type}}"': 'Dein Diagramm für Typ „{{type}}“ gefunden'
  }
};
export const deDE = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale, visualizationstableLocale, visualizationsvisxLocale], 'de-DE', resources);
//# sourceMappingURL=de-DE.js.map