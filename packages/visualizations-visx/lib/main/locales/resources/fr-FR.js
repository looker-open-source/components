"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frFR = void 0;
var _fr = _interopRequireDefault(require("date-fns/locale/fr"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Page de légende {{page}} sur {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Page suivante',
    'Previous page': 'Page précédente'
  },
  XYTooltip: {
    'Points sized by': 'Taille des points selon'
  }
};
var frFR = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.frFR], 'fr-FR', resources, _fr["default"]);
exports.frFR = frFR;
//# sourceMappingURL=fr-FR.js.map