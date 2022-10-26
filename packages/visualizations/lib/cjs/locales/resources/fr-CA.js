"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frCA = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': 'Pas d’enfant passé au composant de requête',
    'Query component received both dashboard and query props': 'Le composant de requête a reçu à la fois le tableau de bord et les propriétés de requête'
  },
  QueryError: {
    Error: 'Erreur'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Les mesures de type « date » ne sont actuellement pas prises en charge',
    'No chart found for type "{{type}}"': 'Aucun graphique trouvé pour le type « {{type}} »'
  }
};
var frCA = {
  locale: 'fr-CA',
  resources: {
    'fr-CA': (0, _merge["default"])({}, resources, _visualizationsAdapters.frCA.resources['fr-CA'], _visualizationsTable.frCA.resources['fr-CA'], _visualizationsVisx.frCA.resources['fr-CA'])
  }
};
exports.frCA = frCA;
//# sourceMappingURL=fr-CA.js.map