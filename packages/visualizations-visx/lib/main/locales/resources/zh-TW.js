"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zhTW = void 0;
var _zhTW = _interopRequireDefault(require("date-fns/locale/zh-TW"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': '圖例頁面第 {{page}} 頁，共 {{totalPages}} 頁'
  },
  PieLegendControls: {
    'Next page': '下一頁',
    'Previous page': '上一頁'
  },
  XYTooltip: {
    'Points sized by': '點調整大小依據'
  }
};
var zhTW = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.zhTW], 'zh-TW', resources, _zhTW["default"]);
exports.zhTW = zhTW;
//# sourceMappingURL=zh-TW.js.map