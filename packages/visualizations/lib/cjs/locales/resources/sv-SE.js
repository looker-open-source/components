"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svSE = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': 'Inga underordnade godkändes av sökfrågekomponenten',
    'Query component received both dashboard and query props': 'Sökfrågekomponenten tog emot både instrumentpanel och frågeförslag'
  },
  QueryError: {
    Error: 'Fel'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Mått av ”data”-typ stöds inte för tillfället',
    'No chart found for type "{{type}}"': 'Inget diagram hittades för typen "{{type}}"'
  }
};
var svSE = {
  locale: 'sv-SE',
  resources: {
    'sv-SE': (0, _merge["default"])({}, resources, _visualizationsAdapters.svSE.resources['sv-SE'], _visualizationsTable.svSE.resources['sv-SE'], _visualizationsVisx.svSE.resources['sv-SE'])
  }
};
exports.svSE = svSE;
//# sourceMappingURL=sv-SE.js.map