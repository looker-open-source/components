"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ptBR = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");
var resources = {
  "Query": {
    "No children passed to Query component": "Nenhum filho foi transmitido ao componente de consulta",
    "Query component received both dashboard and query props": "O componente de consulta recebeu as propostas de consultas e dashboard"
  },
  "QueryError": {
    "Error": "Erro"
  },
  "Visualization": {
    "Measures of type 'date' are currently not supported": "No momento, as medições do tipo \"date\" não são suportadas",
    "No chart found for type \"{{type}}\"": "Nenhum gráfico encontrado para o tipo \"{{type}}\""
  }
};
var ptBR = (0, _i18n.mergeLocaleObjects)([_components.ptBR, _visualizationsAdapters.ptBR, _visualizationsTable.ptBR, _visualizationsVisx.ptBR], 'pt-BR', resources);
exports.ptBR = ptBR;
//# sourceMappingURL=pt-BR.js.map