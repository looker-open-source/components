"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nbNO = void 0;
var _nb = _interopRequireDefault(require("date-fns/locale/nb"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Forklaringsside {{page}} av {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Neste side',
    'Previous page': 'Forrige side'
  },
  XYTooltip: {
    'Points sized by': 'Poeng rangert etter'
  }
};
var nbNO = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.nbNO], 'nb-NO', resources, _nb["default"]);
exports.nbNO = nbNO;
//# sourceMappingURL=nb-NO.js.map