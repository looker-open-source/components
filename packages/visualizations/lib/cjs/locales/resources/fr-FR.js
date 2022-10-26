"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frFR = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': 'Aucun enfant transmis au composant de la requête',
    'Query component received both dashboard and query props': 'Le composant de la requête a reçu des accessoires de tableau de bord et de requête'
  },
  QueryError: {
    Error: 'Erreur'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Les mesures de type « date » ne sont pas prises en charge actuellement',
    'No chart found for type "{{type}}"': 'Aucun graphique trouvé pour le type « {{type}} »'
  }
};
var frFR = {
  locale: 'fr-FR',
  resources: {
    'fr-FR': (0, _merge["default"])({}, resources, _visualizationsAdapters.frFR.resources['fr-FR'], _visualizationsTable.frFR.resources['fr-FR'], _visualizationsVisx.frFR.resources['fr-FR'])
  }
};
exports.frFR = frFR;
//# sourceMappingURL=fr-FR.js.map