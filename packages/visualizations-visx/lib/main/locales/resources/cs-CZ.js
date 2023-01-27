"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.csCZ = void 0;
var _cs = _interopRequireDefault(require("date-fns/locale/cs"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Stránka legendy {{page}} z {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Další stránka',
    'Previous page': 'Předchozí stránka'
  },
  XYTooltip: {
    'Points sized by': 'Velikost bodů podle'
  }
};
var csCZ = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.csCZ], 'cs-CZ', resources, _cs["default"]);
exports.csCZ = csCZ;
//# sourceMappingURL=cs-CZ.js.map