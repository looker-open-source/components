"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daDK = void 0;
var _da = _interopRequireDefault(require("date-fns/locale/da"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Forklaringsside {{page}} af {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Næste side',
    'Previous page': 'Forrige side'
  },
  XYTooltip: {
    'Points sized by': 'Størrelse af punkter efter'
  }
};
var daDK = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.daDK], 'da-DK', resources, _da["default"]);
exports.daDK = daDK;
//# sourceMappingURL=da-DK.js.map