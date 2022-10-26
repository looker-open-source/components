"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trTR = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

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
var trTR = {
  locale: 'tr-TR',
  resources: {
    'tr-TR': (0, _merge["default"])({}, resources, _visualizationsAdapters.trTR.resources['tr-TR'], _visualizationsTable.trTR.resources['tr-TR'], _visualizationsVisx.trTR.resources['tr-TR'])
  }
};
exports.trTR = trTR;
//# sourceMappingURL=tr-TR.js.map