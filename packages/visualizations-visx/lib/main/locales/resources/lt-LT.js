"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ltLT = void 0;
var _lt = _interopRequireDefault(require("date-fns/locale/lt"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Legendos psl. {{page}} iš {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Kitas puslapis',
    'Previous page': 'Ankstesnis puslapis'
  },
  XYTooltip: {
    'Points sized by': 'Taškų dydis pagal'
  }
};
var ltLT = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.ltLT], 'lt-LT', resources, _lt["default"]);
exports.ltLT = ltLT;
//# sourceMappingURL=lt-LT.js.map