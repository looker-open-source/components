"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.esES = void 0;
var _es = _interopRequireDefault(require("date-fns/locale/es"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Página de leyenda {{page}} de {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Página siguiente',
    'Previous page': 'Página anterior'
  },
  XYTooltip: {
    'Points sized by': 'Puntos medidos por'
  }
};
var esES = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.esES], 'es-ES', resources, _es["default"]);
exports.esES = esES;
//# sourceMappingURL=es-ES.js.map