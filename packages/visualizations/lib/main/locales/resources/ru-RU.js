"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ruRU = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

var resources = {
  Query: {
    'No children passed to Query component': 'Нет дочерних элементов, переданных в компонент запросов Query',
    'Query component received both dashboard and query props': 'Компонент запросов Query получил свойства панелей мониторинга и запросов'
  },
  QueryError: {
    Error: 'Ошибка'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Поля measure типа date в настоящее время не доступны',
    'No chart found for type "{{type}}"': 'График для типа «{{type}}» не обнаружен'
  }
};
var ruRU = (0, _i18n.mergeLocaleObjects)([_components.ruRU, _visualizationsAdapters.ruRU, _visualizationsTable.ruRU, _visualizationsVisx.ruRU], 'ru-RU', resources);
exports.ruRU = ruRU;
//# sourceMappingURL=ru-RU.js.map