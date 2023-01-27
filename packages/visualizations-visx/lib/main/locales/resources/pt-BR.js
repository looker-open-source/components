"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ptBR = void 0;
var _ptBR = _interopRequireDefault(require("date-fns/locale/pt-BR"));
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
    'Points sized by': 'Pontos dimensionados por'
  }
};
var ptBR = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.ptBR], 'pt-BR', resources, _ptBR["default"]);
exports.ptBR = ptBR;
//# sourceMappingURL=pt-BR.js.map