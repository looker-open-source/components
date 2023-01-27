

import { esES as componentsLocale } from '@looker/components';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Debug: {
    Config: 'Configuración',
    Dimensions: 'Dimensiones',
    Error: 'Error',
    Measures: 'Medidas',
    Result: 'Resultado',
    error: 'error',
    ok: 'aceptar'
  },
  ErrorBoundary: {
    'Something went wrong': 'Hubo un problema.'
  },
  translation: {
    'Row Total': 'Total de la fila',
    false: 'falso',
    null: 'nulo',
    true: 'verdadero',
    undefined: 'sin definir'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Total de la fila'
  }
};
export const esES = mergeLocaleObjects([componentsLocale], 'es-ES', resources);
//# sourceMappingURL=es-ES.js.map