"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frFR = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");
var resources = {
  "Query": {
    "No children passed to Query component": "Aucun enfant transmis au composant de requête",
    "Query component received both dashboard and query props": "Le composant de requête a reçu des propositions de tableau de bord et de requête"
  },
  "QueryError": {
    "Error": "Erreur"
  },
  "Visualization": {
    "Measures of type 'date' are currently not supported": "Les mesures de type \"date\" ne sont pas compatibles actuellement",
    "No chart found for type \"{{type}}\"": "Aucun graphique de type \"{{type}}\" trouvé"
  }
};
var frFR = (0, _i18n.mergeLocaleObjects)([_components.frFR, _visualizationsAdapters.frFR, _visualizationsTable.frFR, _visualizationsVisx.frFR], 'fr-FR', resources);
exports.frFR = frFR;
//# sourceMappingURL=fr-FR.js.map