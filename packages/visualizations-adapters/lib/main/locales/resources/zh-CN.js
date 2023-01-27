"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zhCN = void 0;
var _components = require("@looker/components");
var _i18n = require("@looker/i18n");

var resources = {
  Debug: {
    Config: '配置',
    Dimensions: '维度',
    Error: '错误',
    Measures: '度量值',
    Result: '结果',
    error: '错误',
    ok: '确认'
  },
  ErrorBoundary: {
    'Something went wrong': '出错了'
  },
  translation: {
    'Row Total': '行总计',
    "false": 'False',
    "null": '空值',
    "true": 'True',
    undefined: '未定义'
  },
  useNormalizedPivotLabels: {
    'Row Total': '行总计'
  }
};
var zhCN = (0, _i18n.mergeLocaleObjects)([_components.zhCN], 'zh-CN', resources);
exports.zhCN = zhCN;
//# sourceMappingURL=zh-CN.js.map