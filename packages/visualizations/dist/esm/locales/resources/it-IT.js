import { itIT as componentsLocale } from '@looker/components';
import { itIT as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { itIT as visualizationstableLocale } from '@looker/visualizations-table';
import { itIT as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  "Query": {
    "No children passed to Query component": "Nessun figlio trasmesso al componente della query",
    "Query component received both dashboard and query props": "Il componente della query ha ricevuto proposte di dashboard e query"
  },
  "QueryError": {
    "Error": "Errore"
  },
  "Visualization": {
    "Measures of type 'date' are currently not supported": "Al momento, le misure di tipo \"data\" non sono supportate",
    "No chart found for type \"{{type}}\"": "Nessun grafico trovato per il tipo \"{{type}}\""
  }
};
export const itIT = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale, visualizationstableLocale, visualizationsvisxLocale], 'it-IT', resources);
//# sourceMappingURL=it-IT.js.map