import merge from 'lodash/merge';
import { ptPT as visAdapterLocales } from '@looker/visualizations-adapters';
import { ptPT as visTableLocales } from '@looker/visualizations-table';
import { ptPT as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
  Query: {
    'No children passed to Query component': 'Nenhum filho passou para a componente de consulta',
    'Query component received both dashboard and query props': 'A componente de consulta recebeu tanto as propriedades do dashboard como da consulta'
  },
  QueryError: {
    Error: 'Erro'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Os indicadores do tipo "data" não são atualmente suportados',
    'No chart found for type "{{type}}"': 'Não foram encontrados gráficos para o tipo “{{type}}”'
  }
};
export const ptPT = {
  locale: 'pt-PT',
  resources: {
    'pt-PT': merge({}, resources, visAdapterLocales.resources['pt-PT'], visTableLocales.resources['pt-PT'], visVisxLocales.resources['pt-PT'])
  }
};
//# sourceMappingURL=pt-PT.js.map