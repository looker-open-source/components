"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.esES = void 0;
var _components = require("@looker/components");
var _i18n = require("@looker/i18n");

var resources = {
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
    "false": 'falso',
    "null": 'nulo',
    "true": 'verdadero',
    undefined: 'sin definir'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Total de la fila'
  }
};
var esES = (0, _i18n.mergeLocaleObjects)([_components.esES], 'es-ES', resources);
exports.esES = esES;
//# sourceMappingURL=es-ES.js.map