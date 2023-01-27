"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trTR = void 0;
var _tr = _interopRequireDefault(require("date-fns/locale/tr"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Gösterge sayfa {{page}}/{{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Sonraki sayfa',
    'Previous page': 'Önceki sayfa'
  },
  XYTooltip: {
    'Points sized by': 'Puan ölçütü'
  }
};
var trTR = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.trTR], 'tr-TR', resources, _tr["default"]);
exports.trTR = trTR;
//# sourceMappingURL=tr-TR.js.map