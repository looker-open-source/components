"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zhCN = void 0;
var _zhCN = _interopRequireDefault(require("date-fns/locale/zh-CN"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': '图例页 {{page}}，共 {{totalPages}} 页'
  },
  PieLegendControls: {
    'Next page': '下一页',
    'Previous page': '上一页'
  },
  XYTooltip: {
    'Points sized by': '点大小划分依据'
  }
};
var zhCN = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.zhCN], 'zh-CN', resources, _zhCN["default"]);
exports.zhCN = zhCN;
//# sourceMappingURL=zh-CN.js.map