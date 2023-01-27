"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ltLT = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

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
var ltLT = (0, _i18n.mergeLocaleObjects)([_components.ltLT, _visualizationsAdapters.ltLT, _visualizationsTable.ltLT, _visualizationsVisx.ltLT], 'lt-LT', resources);
exports.ltLT = ltLT;
//# sourceMappingURL=lt-LT.js.map