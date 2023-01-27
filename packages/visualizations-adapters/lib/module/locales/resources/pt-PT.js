

import { ptPT as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Debug: {
    Config: 'Configuração',
    Dimensions: 'Dimensões',
    Error: 'Erro',
    Measures: 'Medidas',
    Result: 'Resultado',
    error: 'erro',
    ok: 'ok'
  },
  ErrorBoundary: {
    'Something went wrong': 'Ocorreu um erro'
  },
  translation: {
    'Row Total': 'Total da linha',
    false: 'falso',
    null: 'nulo',
    true: 'verdadeiro',
    undefined: 'indefinido'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Total da linha'
  }
};
export const ptPT = mergeLocaleObjects([componentsLocale], 'pt-PT', resources);
//# sourceMappingURL=pt-PT.js.map