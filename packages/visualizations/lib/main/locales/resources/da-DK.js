"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daDK = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

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
var daDK = (0, _i18n.mergeLocaleObjects)([_components.daDK, _visualizationsAdapters.daDK, _visualizationsTable.daDK, _visualizationsVisx.daDK], 'da-DK', resources);
exports.daDK = daDK;
//# sourceMappingURL=da-DK.js.map