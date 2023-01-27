"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zhTW = void 0;
var _components = require("@looker/components");
var _i18n = require("@looker/i18n");

var resources = {
  Debug: {
    Config: '設定',
    Dimensions: '維度',
    Error: '錯誤',
    Measures: '量值',
    Result: '結果',
    error: '錯誤',
    ok: '好'
  },
  ErrorBoundary: {
    'Something went wrong': '發生錯誤了'
  },
  translation: {
    'Row Total': '資料列總計',
    "false": '假',
    "null": 'Null',
    "true": '真',
    undefined: '未定義'
  },
  useNormalizedPivotLabels: {
    'Row Total': '資料列總計'
  }
};
var zhTW = (0, _i18n.mergeLocaleObjects)([_components.zhTW], 'zh-TW', resources);
exports.zhTW = zhTW;
//# sourceMappingURL=zh-TW.js.map