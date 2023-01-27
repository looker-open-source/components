"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frCA = void 0;
var _frCA = _interopRequireDefault(require("date-fns/locale/fr-CA"));
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
var frCA = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.frCA], 'fr-CA', resources, _frCA["default"]);
exports.frCA = frCA;
//# sourceMappingURL=fr-CA.js.map