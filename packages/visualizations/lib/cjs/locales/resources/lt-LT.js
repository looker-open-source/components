"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ltLT = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': 'Užklausos komponentui neperduoti antriniai elementai',
    'Query component received both dashboard and query props': 'Užklausos komponentas gavo ataskaitų srities ir užklausos savybes'
  },
  QueryError: {
    Error: 'Klaida'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Šiuo metu datos tipo matai nepalaikomi',
    'No chart found for type "{{type}}"': 'Nerasta „{{type}}“ tipo diagrama'
  }
};
var ltLT = {
  locale: 'lt-LT',
  resources: {
    'lt-LT': (0, _merge["default"])({}, resources, _visualizationsAdapters.ltLT.resources['lt-LT'], _visualizationsTable.ltLT.resources['lt-LT'], _visualizationsVisx.ltLT.resources['lt-LT'])
  }
};
exports.ltLT = ltLT;
//# sourceMappingURL=lt-LT.js.map