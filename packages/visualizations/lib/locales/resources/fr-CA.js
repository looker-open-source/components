import merge from 'lodash/merge';
import { frCA as visAdapterLocales } from '@looker/visualizations-adapters';
import { frCA as visTableLocales } from '@looker/visualizations-table';
import { frCA as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'Pas d’enfant passé au composant de requête',
    'Query component received both dashboard and query props': 'Le composant de requête a reçu à la fois le tableau de bord et les propriétés de requête'
  },
  QueryError: {
    Error: 'Erreur'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Les mesures de type « date » ne sont actuellement pas prises en charge',
    'No chart found for type "{{type}}"': 'Aucun graphique trouvé pour le type « {{type}} »'
  }
};
export const frCA = {
  locale: 'fr-CA',
  resources: {
    'fr-CA': merge({}, resources, visAdapterLocales.resources['fr-CA'], visTableLocales.resources['fr-CA'], visVisxLocales.resources['fr-CA'])
  }
};
//# sourceMappingURL=fr-CA.js.map