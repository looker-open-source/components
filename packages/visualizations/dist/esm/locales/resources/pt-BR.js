import { ptBR as componentsLocale } from '@looker/components';
import { ptBR as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { ptBR as visualizationstableLocale } from '@looker/visualizations-table';
import { ptBR as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  "Query": {
    "No children passed to Query component": "Nenhum filho foi transmitido ao componente de consulta",
    "Query component received both dashboard and query props": "O componente de consulta recebeu as propostas de consultas e dashboard"
  },
  "QueryError": {
    "Error": "Erro"
  },
  "Visualization": {
    "Measures of type 'date' are currently not supported": "No momento, as medições do tipo \"date\" não são suportadas",
    "No chart found for type \"{{type}}\"": "Nenhum gráfico encontrado para o tipo \"{{type}}\""
  }
};
export const ptBR = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale, visualizationstableLocale, visualizationsvisxLocale], 'pt-BR', resources);
//# sourceMappingURL=pt-BR.js.map