"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deDE = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': 'Keine untergeordneten Elemente an Abfragekomponente übergeben',
    'Query component received both dashboard and query props': 'Abfragekomponente hat Dashboard- und Abfrageeigenschaften erhalten.'
  },
  QueryError: {
    Error: 'Fehler'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Messwerte des Typs „date“ werden zurzeit nicht unterstützt.',
    'No chart found for type "{{type}}"': 'Kein Diagramm für Typ „{{type}}“ gefunden'
  }
};
var deDE = {
  locale: 'de-DE',
  resources: {
    'de-DE': (0, _merge["default"])({}, resources, _visualizationsAdapters.deDE.resources['de-DE'], _visualizationsTable.deDE.resources['de-DE'], _visualizationsVisx.deDE.resources['de-DE'])
  }
};
exports.deDE = deDE;
//# sourceMappingURL=de-DE.js.map