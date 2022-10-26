"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ptBR = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': 'Nenhum dependente passou para componente de consulta',
    'Query component received both dashboard and query props': 'O componente de consulta recebeu propriedades de dashboard e consulta'
  },
  QueryError: {
    Error: 'Erro'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'No momento, medidas do tipo “data” não são compatíveis',
    'No chart found for type "{{type}}"': 'Não foram encontrados gráficos para o tipo “{{type}}”'
  }
};
var ptBR = {
  locale: 'pt-BR',
  resources: {
    'pt-BR': (0, _merge["default"])({}, resources, _visualizationsAdapters.ptBR.resources['pt-BR'], _visualizationsTable.ptBR.resources['pt-BR'], _visualizationsVisx.ptBR.resources['pt-BR'])
  }
};
exports.ptBR = ptBR;
//# sourceMappingURL=pt-BR.js.map