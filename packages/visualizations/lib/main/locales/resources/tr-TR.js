"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trTR = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

var resources = {
  Query: {
    'No children passed to Query component': 'Sorgu bileşenine alt öğe geçmedi',
    'Query component received both dashboard and query props': 'Sorgu bileşeni hem pano hem sorgu özelliklerini aldı'
  },
  QueryError: {
    Error: 'Hata'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": '"Tarih" tür ölçümleri şu anda desteklenmiyor',
    'No chart found for type "{{type}}"': '"{{type}}" türü için grafik bulunamadı'
  }
};
var trTR = (0, _i18n.mergeLocaleObjects)([_components.trTR, _visualizationsAdapters.trTR, _visualizationsTable.trTR, _visualizationsVisx.trTR], 'tr-TR', resources);
exports.trTR = trTR;
//# sourceMappingURL=tr-TR.js.map