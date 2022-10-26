"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.csCZ = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

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
var csCZ = {
  locale: 'cs-CZ',
  resources: {
    'cs-CZ': (0, _merge["default"])({}, resources, _visualizationsAdapters.csCZ.resources['cs-CZ'], _visualizationsTable.csCZ.resources['cs-CZ'], _visualizationsVisx.csCZ.resources['cs-CZ'])
  }
};
exports.csCZ = csCZ;
//# sourceMappingURL=cs-CZ.js.map