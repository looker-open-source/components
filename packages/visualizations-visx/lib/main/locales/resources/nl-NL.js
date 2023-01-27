"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nlNL = void 0;
var _nl = _interopRequireDefault(require("date-fns/locale/nl"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Legendapagina {{page}} van {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Volgende pagina',
    'Previous page': 'Vorige pagina'
  },
  XYTooltip: {
    'Points sized by': 'Punten ingepast op basis van'
  }
};
var nlNL = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.nlNL], 'nl-NL', resources, _nl["default"]);
exports.nlNL = nlNL;
//# sourceMappingURL=nl-NL.js.map