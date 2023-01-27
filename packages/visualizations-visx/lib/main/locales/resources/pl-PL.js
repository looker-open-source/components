"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plPL = void 0;
var _pl = _interopRequireDefault(require("date-fns/locale/pl"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Strona legendy {{page}} z {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Następna strona',
    'Previous page': 'Poprzednia strona'
  },
  XYTooltip: {
    'Points sized by': 'Punkty rozmiaru według'
  }
};
var plPL = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.plPL], 'pl-PL', resources, _pl["default"]);
exports.plPL = plPL;
//# sourceMappingURL=pl-PL.js.map