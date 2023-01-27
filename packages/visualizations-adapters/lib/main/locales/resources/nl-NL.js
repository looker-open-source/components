"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nlNL = void 0;
var _components = require("@looker/components");
var _i18n = require("@looker/i18n");

var resources = {
  Debug: {
    Config: 'Configureren',
    Dimensions: 'Dimensies',
    Error: 'Fout',
    Measures: 'Maten',
    Result: 'Resultaat',
    error: 'fout',
    ok: 'OK'
  },
  ErrorBoundary: {
    'Something went wrong': 'Er is iets fout gegaan'
  },
  translation: {
    'Row Total': 'Rijtotaal',
    "false": 'onwaar',
    "null": 'ongeldig',
    "true": 'waar',
    undefined: 'ongedefinieerd'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Rijtotaal'
  }
};
var nlNL = (0, _i18n.mergeLocaleObjects)([_components.nlNL], 'nl-NL', resources);
exports.nlNL = nlNL;
//# sourceMappingURL=nl-NL.js.map