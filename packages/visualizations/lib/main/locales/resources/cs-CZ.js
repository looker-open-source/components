"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.csCZ = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

var resources = {
  Query: {
    'No children passed to Query component': 'Komponentě dotazu nebyly předány žádné podřízené položky',
    'Query component received both dashboard and query props': 'Komponenta dotazu obdržela vlastnosti řídicího panelu i dotazu'
  },
  QueryError: {
    Error: 'Chyba'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Míry typu „datum“ nejsou aktuálně podporovány',
    'No chart found for type "{{type}}"': 'Pro typ „{{type}}“ nebyl nalezen žádný graf'
  }
};
var csCZ = (0, _i18n.mergeLocaleObjects)([_components.csCZ, _visualizationsAdapters.csCZ, _visualizationsTable.csCZ, _visualizationsVisx.csCZ], 'cs-CZ', resources);
exports.csCZ = csCZ;
//# sourceMappingURL=cs-CZ.js.map