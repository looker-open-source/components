"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hiIN = void 0;
var _components = require("@looker/components");
var _i18n = require("@looker/i18n");

var resources = {
  Debug: {
    Config: 'कॉन्फ़िग',
    Dimensions: 'आयाम',
    Error: 'त्रुटि',
    Measures: 'माप',
    Result: 'परिणाम',
    error: 'त्रुटि',
    ok: 'ठीक है'
  },
  ErrorBoundary: {
    'Something went wrong': 'कुछ गड़बड़ी हुई'
  },
  translation: {
    'Row Total': 'कुल पंक्ति',
    "false": 'ग़लत',
    "null": 'नल',
    "true": 'सही',
    undefined: 'अपरिभाषित'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'कुल पंक्ति'
  }
};
var hiIN = (0, _i18n.mergeLocaleObjects)([_components.hiIN], 'hi-IN', resources);
exports.hiIN = hiIN;
//# sourceMappingURL=hi-IN.js.map