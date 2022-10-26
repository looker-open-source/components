import merge from 'lodash/merge';
import { esES as visAdapterLocales } from '@looker/visualizations-adapters';
import { esES as visTableLocales } from '@looker/visualizations-table';
import { esES as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'No se pasó ningún elemento secundario al componente de consulta.',
    'Query component received both dashboard and query props': 'El componente de consulta recibió propiedades de dashboard y de consulta.'
  },
  QueryError: {
    Error: 'Error'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Actualmente no se admiten las medidas del tipo "fecha".',
    'No chart found for type "{{type}}"': 'No se encontró ningún gráfico para el tipo "{{type}}"'
  }
};
export const esES = {
  locale: 'es-ES',
  resources: {
    'es-ES': merge({}, resources, visAdapterLocales.resources['es-ES'], visTableLocales.resources['es-ES'], visVisxLocales.resources['es-ES'])
  }
};
//# sourceMappingURL=es-ES.js.map