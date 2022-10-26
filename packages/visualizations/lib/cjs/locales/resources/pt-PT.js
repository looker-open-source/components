"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ptPT = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

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
var ptPT = {
  locale: 'pt-PT',
  resources: {
    'pt-PT': (0, _merge["default"])({}, resources, _visualizationsAdapters.ptPT.resources['pt-PT'], _visualizationsTable.ptPT.resources['pt-PT'], _visualizationsVisx.ptPT.resources['pt-PT'])
  }
};
exports.ptPT = ptPT;
//# sourceMappingURL=pt-PT.js.map