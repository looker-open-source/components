"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frCA = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

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
var frCA = (0, _i18n.mergeLocaleObjects)([_components.frCA, _visualizationsAdapters.frCA, _visualizationsTable.frCA, _visualizationsVisx.frCA], 'fr-CA', resources);
exports.frCA = frCA;
//# sourceMappingURL=fr-CA.js.map