import { frFR as componentsLocale } from '@looker/components';
import { frFR as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { frFR as visualizationstableLocale } from '@looker/visualizations-table';
import { frFR as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  "Query": {
    "No children passed to Query component": "Aucun enfant transmis au composant de requête",
    "Query component received both dashboard and query props": "Le composant de requête a reçu des propositions de tableau de bord et de requête"
  },
  "QueryError": {
    "Error": "Erreur"
  },
  "Visualization": {
    "Measures of type 'date' are currently not supported": "Les mesures de type \"date\" ne sont pas compatibles actuellement",
    "No chart found for type \"{{type}}\"": "Aucun graphique de type \"{{type}}\" trouvé"
  }
};
export const frFR = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale, visualizationstableLocale, visualizationsvisxLocale], 'fr-FR', resources);
//# sourceMappingURL=fr-FR.js.map