"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ptPT = void 0;
var _pt = _interopRequireDefault(require("date-fns/locale/pt"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Página de legenda {{page}} de {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Próxima página',
    'Previous page': 'Página anterior'
  },
  XYTooltip: {
    'Points sized by': 'Pontos calibrados por'
  }
};
var ptPT = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.ptPT], 'pt-PT', resources, _pt["default"]);
exports.ptPT = ptPT;
//# sourceMappingURL=pt-PT.js.map