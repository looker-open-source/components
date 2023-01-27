"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jaJP = void 0;
var _ja = _interopRequireDefault(require("date-fns/locale/ja"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': '凡例ページ（{{page}}/{{totalPages}}）'
  },
  PieLegendControls: {
    'Next page': '次のページ',
    'Previous page': '前のページ'
  },
  XYTooltip: {
    'Points sized by': 'ポイントのサイズ単位：'
  }
};
var jaJP = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.jaJP], 'ja-JP', resources, _ja["default"]);
exports.jaJP = jaJP;
//# sourceMappingURL=ja-JP.js.map