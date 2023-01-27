"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.en = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

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
var en = (0, _i18n.mergeLocaleObjects)([_components.en, _visualizationsAdapters.en, _visualizationsTable.en, _visualizationsVisx.en], 'en', resources);
exports.en = en;
//# sourceMappingURL=en.js.map