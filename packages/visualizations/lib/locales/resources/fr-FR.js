import merge from 'lodash/merge';
import { frFR as visAdapterLocales } from '@looker/visualizations-adapters';
import { frFR as visTableLocales } from '@looker/visualizations-table';
import { frFR as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'Aucun enfant transmis au composant de la requête',
    'Query component received both dashboard and query props': 'Le composant de la requête a reçu des accessoires de tableau de bord et de requête'
  },
  QueryError: {
    Error: 'Erreur'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Les mesures de type « date » ne sont pas prises en charge actuellement',
    'No chart found for type "{{type}}"': 'Aucun graphique trouvé pour le type « {{type}} »'
  }
};
export const frFR = {
  locale: 'fr-FR',
  resources: {
    'fr-FR': merge({}, resources, visAdapterLocales.resources['fr-FR'], visTableLocales.resources['fr-FR'], visVisxLocales.resources['fr-FR'])
  }
};
//# sourceMappingURL=fr-FR.js.map