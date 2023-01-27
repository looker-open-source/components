"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trTR = void 0;
var _components = require("@looker/components");
var _i18n = require("@looker/i18n");

var resources = {
  Debug: {
    Config: 'Yapılandırma',
    Dimensions: 'Boyutlar',
    Error: 'Hata',
    Measures: 'Ölçümler',
    Result: 'Sonuç',
    error: 'hata',
    ok: 'tamam'
  },
  ErrorBoundary: {
    'Something went wrong': 'Bir sorun oluştu'
  },
  translation: {
    'Row Total': 'Satır Toplamı',
    "false": 'yanlış',
    "null": 'boş',
    "true": 'doğru',
    undefined: 'tanımlanmamış'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'Satır Toplamı'
  }
};
var trTR = (0, _i18n.mergeLocaleObjects)([_components.trTR], 'tr-TR', resources);
exports.trTR = trTR;
//# sourceMappingURL=tr-TR.js.map