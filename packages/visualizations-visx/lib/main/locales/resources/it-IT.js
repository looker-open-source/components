"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itIT = void 0;
var _it = _interopRequireDefault(require("date-fns/locale/it"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Pagina {{page}} di {{totalPages}} della legenda'
  },
  PieLegendControls: {
    'Next page': 'Pagina successiva',
    'Previous page': 'Pagina precedente'
  },
  XYTooltip: {
    'Points sized by': 'Punti con dimensione specificata in base a'
  }
};
var itIT = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.itIT], 'it-IT', resources, _it["default"]);
exports.itIT = itIT;
//# sourceMappingURL=it-IT.js.map