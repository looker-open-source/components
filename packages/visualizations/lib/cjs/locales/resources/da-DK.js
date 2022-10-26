"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daDK = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': 'Ingen underordnet er videreført til forespørgselskomponent',
    'Query component received both dashboard and query props': 'Forespørgselskomponenten har modtaget både dashboard- og forespørgsels-props'
  },
  QueryError: {
    Error: 'Fejl'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": "Mål af typen 'dato' understøttes ikke i øjeblikket",
    'No chart found for type "{{type}}"': 'Der blev ikke fundet noget diagram for typen "{{type}}"'
  }
};
var daDK = {
  locale: 'da-DK',
  resources: {
    'da-DK': (0, _merge["default"])({}, resources, _visualizationsAdapters.daDK.resources['da-DK'], _visualizationsTable.daDK.resources['da-DK'], _visualizationsVisx.daDK.resources['da-DK'])
  }
};
exports.daDK = daDK;
//# sourceMappingURL=da-DK.js.map