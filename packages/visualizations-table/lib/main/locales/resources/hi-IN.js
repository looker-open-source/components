"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hiIN = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  Table: {
    'Shift + Click to sort additional columns': 'अतिरिक्त कॉलम को सॉर्ट करने के लिए Shift + क्लिक करें',
    'Sort ascending': 'आरोही में क्रमित करें',
    'Sort descending': 'अवरोही में क्रमित करें',
    Totals: 'योग'
  }
};
var hiIN = (0, _i18n.mergeLocaleObjects)([_components.hiIN, _visualizationsAdapters.hiIN], 'hi-IN', resources);
exports.hiIN = hiIN;
//# sourceMappingURL=hi-IN.js.map