"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daDK = void 0;
var _components = require("@looker/components");
var _i18n = require("@looker/i18n");

var resources = {
  Debug: {
    Config: 'Konfigurer',
    Dimensions: 'Dimensioner',
    Error: 'Fejl',
    Measures: 'Mål',
    Result: 'Resultat',
    error: 'fejl',
    ok: 'OK'
  },
  ErrorBoundary: {
    'Something went wrong': 'Der gik noget galt'
  },
  translation: {
    'Row Total': 'Rækketotal',
    "false": 'falsk',
    "null": 'null',
    "true": 'sand',
    undefined: 'ikke defineret'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Rækketotal'
  }
};
var daDK = (0, _i18n.mergeLocaleObjects)([_components.daDK], 'da-DK', resources);
exports.daDK = daDK;
//# sourceMappingURL=da-DK.js.map