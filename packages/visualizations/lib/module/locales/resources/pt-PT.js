

import { ptPT as componentsLocale } from '@looker/components';
import { ptPT as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { ptPT as visualizationstableLocale } from '@looker/visualizations-table';
import { ptPT as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';
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
export const ptPT = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale, visualizationstableLocale, visualizationsvisxLocale], 'pt-PT', resources);
//# sourceMappingURL=pt-PT.js.map