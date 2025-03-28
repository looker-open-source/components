"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itIT = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");
var resources = {
  "Query": {
    "No children passed to Query component": "Nessun figlio trasmesso al componente della query",
    "Query component received both dashboard and query props": "Il componente della query ha ricevuto proposte di dashboard e query"
  },
  "QueryError": {
    "Error": "Errore"
  },
  "Visualization": {
    "Measures of type 'date' are currently not supported": "Al momento, le misure di tipo \"data\" non sono supportate",
    "No chart found for type \"{{type}}\"": "Nessun grafico trovato per il tipo \"{{type}}\""
  }
};
var itIT = (0, _i18n.mergeLocaleObjects)([_components.itIT, _visualizationsAdapters.itIT, _visualizationsTable.itIT, _visualizationsVisx.itIT], 'it-IT', resources);
exports.itIT = itIT;
//# sourceMappingURL=it-IT.js.map