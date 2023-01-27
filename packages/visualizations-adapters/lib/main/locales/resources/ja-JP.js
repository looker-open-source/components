"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jaJP = void 0;
var _components = require("@looker/components");
var _i18n = require("@looker/i18n");

var resources = {
  Debug: {
    Config: '構成',
    Dimensions: 'Dimension',
    Error: 'エラー',
    Measures: 'Measure',
    Result: '結果',
    error: 'エラー',
    ok: 'OK'
  },
  ErrorBoundary: {
    'Something went wrong': '問題が発生しました'
  },
  translation: {
    'Row Total': '行の合計',
    "false": 'false',
    "null": 'null',
    "true": 'true',
    undefined: 'undefined'
  },
  useNormalizedPivotLabels: {
    'Row Total': '行の合計'
  }
};
var jaJP = (0, _i18n.mergeLocaleObjects)([_components.jaJP], 'ja-JP', resources);
exports.jaJP = jaJP;
//# sourceMappingURL=ja-JP.js.map