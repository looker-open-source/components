"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ptPT = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

var resources = {
  Query: {
    'No children passed to Query component': 'Nenhum filho passou para a componente de consulta',
    'Query component received both dashboard and query props': 'A componente de consulta recebeu tanto as propriedades do dashboard como da consulta'
  },
  QueryError: {
    Error: 'Erro'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Os indicadores do tipo "data" não são atualmente suportados',
    'No chart found for type "{{type}}"': 'Não foram encontrados gráficos para o tipo “{{type}}”'
  }
};
var ptPT = (0, _i18n.mergeLocaleObjects)([_components.ptPT, _visualizationsAdapters.ptPT, _visualizationsTable.ptPT, _visualizationsVisx.ptPT], 'pt-PT', resources);
exports.ptPT = ptPT;
//# sourceMappingURL=pt-PT.js.map