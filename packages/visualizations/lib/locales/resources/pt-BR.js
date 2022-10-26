import merge from 'lodash/merge';
import { ptBR as visAdapterLocales } from '@looker/visualizations-adapters';
import { ptBR as visTableLocales } from '@looker/visualizations-table';
import { ptBR as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'Nenhum dependente passou para componente de consulta',
    'Query component received both dashboard and query props': 'O componente de consulta recebeu propriedades de dashboard e consulta'
  },
  QueryError: {
    Error: 'Erro'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'No momento, medidas do tipo “data” não são compatíveis',
    'No chart found for type "{{type}}"': 'Não foram encontrados gráficos para o tipo “{{type}}”'
  }
};
export const ptBR = {
  locale: 'pt-BR',
  resources: {
    'pt-BR': merge({}, resources, visAdapterLocales.resources['pt-BR'], visTableLocales.resources['pt-BR'], visVisxLocales.resources['pt-BR'])
  }
};
//# sourceMappingURL=pt-BR.js.map