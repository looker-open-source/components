"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itIT = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': 'Nessun elemento secondario trasmesso al componente Query',
    'Query component received both dashboard and query props': 'Il componente query ha ricevuto sia la dashboard che gli oggetti di query'
  },
  QueryError: {
    Error: 'Errore'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Le misure di tipo “data” non sono attualmente supportate',
    'No chart found for type "{{type}}"': 'Nessun grafico trovato per il tipo "{{type}}"'
  }
};
var itIT = {
  locale: 'it-IT',
  resources: {
    'it-IT': (0, _merge["default"])({}, resources, _visualizationsAdapters.itIT.resources['it-IT'], _visualizationsTable.itIT.resources['it-IT'], _visualizationsVisx.itIT.resources['it-IT'])
  }
};
exports.itIT = itIT;
//# sourceMappingURL=it-IT.js.map