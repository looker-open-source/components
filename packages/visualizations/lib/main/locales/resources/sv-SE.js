"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svSE = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

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
var svSE = (0, _i18n.mergeLocaleObjects)([_components.svSE, _visualizationsAdapters.svSE, _visualizationsTable.svSE, _visualizationsVisx.svSE], 'sv-SE', resources);
exports.svSE = svSE;
//# sourceMappingURL=sv-SE.js.map