"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.en = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': 'No children passed to Query component',
    'Query component received both dashboard and query props': 'Query component received both dashboard and query props'
  },
  QueryError: {
    Error: 'Error'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": "Measures of type 'date' are currently not supported",
    'No chart found for type "{{type}}"': 'No chart found for type "{{type}}"'
  }
};
var en = {
  locale: 'en',
  resources: {
    en: (0, _merge["default"])({}, resources, _visualizationsAdapters.en.resources.en, _visualizationsTable.en.resources.en, _visualizationsVisx.en.resources.en)
  }
};
exports.en = en;
//# sourceMappingURL=en.js.map