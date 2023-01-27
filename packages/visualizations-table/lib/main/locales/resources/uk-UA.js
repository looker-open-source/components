"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ukUA = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Натисніть, утримуючи Shift, щоб сортувати додаткові стовпці',
    'Sort ascending': 'Сортувати за зростанням',
    'Sort descending': 'Сортувати за спаданням',
    Totals: 'Підсумки'
  }
};
var ukUA = (0, _i18n.mergeLocaleObjects)([_components.ukUA, _visualizationsAdapters.ukUA], 'uk-UA', resources);
exports.ukUA = ukUA;
//# sourceMappingURL=uk-UA.js.map