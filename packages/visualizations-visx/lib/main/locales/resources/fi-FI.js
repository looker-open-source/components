"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fiFI = void 0;
var _fi = _interopRequireDefault(require("date-fns/locale/fi"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Selitesivu {{page}}/{{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Seuraava sivu',
    'Previous page': 'Edellinen sivu'
  },
  XYTooltip: {
    'Points sized by': 'Pisteet sovittanut'
  }
};
var fiFI = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.fiFI], 'fi-FI', resources, _fi["default"]);
exports.fiFI = fiFI;
//# sourceMappingURL=fi-FI.js.map