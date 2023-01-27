"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ukUA = void 0;
var _uk = _interopRequireDefault(require("date-fns/locale/uk"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Легенда, сторінка {{page}} із {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Наступна сторінка',
    'Previous page': 'Попередня сторінка'
  },
  XYTooltip: {
    'Points sized by': 'Точки відсортовано за'
  }
};
var ukUA = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.ukUA], 'uk-UA', resources, _uk["default"]);
exports.ukUA = ukUA;
//# sourceMappingURL=uk-UA.js.map