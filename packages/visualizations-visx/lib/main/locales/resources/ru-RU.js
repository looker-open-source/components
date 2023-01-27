"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ruRU = void 0;
var _ru = _interopRequireDefault(require("date-fns/locale/ru"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Страница легенды: {{page}} из {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Следующая страница',
    'Previous page': 'Предыдущая страница'
  },
  XYTooltip: {
    'Points sized by': 'Точки отсортированы по'
  }
};
var ruRU = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.ruRU], 'ru-RU', resources, _ru["default"]);
exports.ruRU = ruRU;
//# sourceMappingURL=ru-RU.js.map