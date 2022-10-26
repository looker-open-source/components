"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plPL = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': 'Do składnika zapytania nie przekazano żadnych elementów podrzędnych',
    'Query component received both dashboard and query props': 'Składnik zapytania otrzymał zarówno właściwości pulpitu nawigacyjnego, jak i zapytania'
  },
  QueryError: {
    Error: 'Błąd'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Wskaźniki typu „data” nie są obecnie obsługiwane',
    'No chart found for type "{{type}}"': 'Nie znaleziono wykresu dla typu „{{type}}”'
  }
};
var plPL = {
  locale: 'pl-PL',
  resources: {
    'pl-PL': (0, _merge["default"])({}, resources, _visualizationsAdapters.plPL.resources['pl-PL'], _visualizationsTable.plPL.resources['pl-PL'], _visualizationsVisx.plPL.resources['pl-PL'])
  }
};
exports.plPL = plPL;
//# sourceMappingURL=pl-PL.js.map