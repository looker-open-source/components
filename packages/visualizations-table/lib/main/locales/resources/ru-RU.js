"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ruRU = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Чтобы отсортировать дополнительные столбцы, щелкайте по ним, удерживая нажатой клавишу SHIFT',
    'Sort ascending': 'Сортировка по возрастанию',
    'Sort descending': 'Сортировка по убыванию',
    Totals: 'Сумма'
  }
};
var ruRU = (0, _i18n.mergeLocaleObjects)([_components.ruRU, _visualizationsAdapters.ruRU], 'ru-RU', resources);
exports.ruRU = ruRU;
//# sourceMappingURL=ru-RU.js.map