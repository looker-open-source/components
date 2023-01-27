"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plPL = void 0;
var _components = require("@looker/components");
var _i18n = require("@looker/i18n");

var resources = {
  Debug: {
    Config: 'Konfig.',
    Dimensions: 'Wymiary',
    Error: 'Błąd',
    Measures: 'Miary',
    Result: 'Wynik',
    error: 'błąd',
    ok: 'ok'
  },
  ErrorBoundary: {
    'Something went wrong': 'Coś poszło nie tak'
  },
  translation: {
    'Row Total': 'Suma wiersza',
    "false": 'fałsz',
    "null": 'ma wartość null',
    "true": 'prawda',
    undefined: 'niezdefiniowany'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Suma wiersza'
  }
};
var plPL = (0, _i18n.mergeLocaleObjects)([_components.plPL], 'pl-PL', resources);
exports.plPL = plPL;
//# sourceMappingURL=pl-PL.js.map