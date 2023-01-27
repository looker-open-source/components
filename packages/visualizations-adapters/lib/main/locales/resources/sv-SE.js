"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svSE = void 0;
var _components = require("@looker/components");
var _i18n = require("@looker/i18n");

var resources = {
  Debug: {
    Config: 'Konfigurera',
    Dimensions: 'Dimensioner',
    Error: 'Fel',
    Measures: 'Mått',
    Result: 'Resultat',
    error: 'fel',
    ok: 'OK'
  },
  ErrorBoundary: {
    'Something went wrong': 'Något gick fel.'
  },
  translation: {
    'Row Total': 'Radsumma',
    "false": 'falsk',
    "null": 'null',
    "true": 'sant',
    undefined: 'odefinierat'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Radsumma'
  }
};
var svSE = (0, _i18n.mergeLocaleObjects)([_components.svSE], 'sv-SE', resources);
exports.svSE = svSE;
//# sourceMappingURL=sv-SE.js.map