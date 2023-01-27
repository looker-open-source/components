"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svSE = void 0;
var _sv = _interopRequireDefault(require("date-fns/locale/sv"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Teckenförklaringssida {{page}} av {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Nästa sida',
    'Previous page': 'Föregående sida'
  },
  XYTooltip: {
    'Points sized by': 'Punktstorlekar efter'
  }
};
var svSE = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.svSE], 'sv-SE', resources, _sv["default"]);
exports.svSE = svSE;
//# sourceMappingURL=sv-SE.js.map