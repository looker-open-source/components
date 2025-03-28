"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deDE = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");
var resources = {
  "Query": {
    "No children passed to Query component": "Keine untergeordneten Elemente an Abfragekomponente übergeben",
    "Query component received both dashboard and query props": "Die Abfragekomponente hat sowohl Dashboard- als auch Abfrageattribute erhalten"
  },
  "QueryError": {
    "Error": "Fehler"
  },
  "Visualization": {
    "Measures of type 'date' are currently not supported": "Messungen vom Typ „Datum“ werden derzeit nicht unterstützt",
    "No chart found for type \"{{type}}\"": "Kein Diagramm für den Typ „{{type}}“ gefunden"
  }
};
var deDE = (0, _i18n.mergeLocaleObjects)([_components.deDE, _visualizationsAdapters.deDE, _visualizationsTable.deDE, _visualizationsVisx.deDE], 'de-DE', resources);
exports.deDE = deDE;
//# sourceMappingURL=de-DE.js.map