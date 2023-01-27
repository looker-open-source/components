"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fiFI = void 0;
var _components = require("@looker/components");
var _i18n = require("@looker/i18n");

var resources = {
  Debug: {
    Config: 'Määritys',
    Dimensions: 'Ulottuvuudet',
    Error: 'Virhe',
    Measures: 'Mitat',
    Result: 'Tulos',
    error: 'virhe',
    ok: 'OK'
  },
  ErrorBoundary: {
    'Something went wrong': 'Jokin meni pieleen'
  },
  translation: {
    'Row Total': 'Rivin summa',
    "false": 'epätosi',
    "null": 'nolla',
    "true": 'tosi',
    undefined: 'määrittämätön'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Rivin summa'
  }
};
var fiFI = (0, _i18n.mergeLocaleObjects)([_components.fiFI], 'fi-FI', resources);
exports.fiFI = fiFI;
//# sourceMappingURL=fi-FI.js.map