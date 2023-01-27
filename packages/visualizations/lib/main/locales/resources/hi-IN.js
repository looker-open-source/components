"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hiIN = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

var resources = {
  Query: {
    'No children passed to Query component': 'क्वेरी घटक में कोई चिल्ड्रन पास नहीं हुआ',
    'Query component received both dashboard and query props': 'क्वेरी कंपोनेंट को डैशबोर्ड और क्वेरी प्रॉप्स दोनों प्राप्त हुए'
  },
  QueryError: {
    Error: 'त्रुटि'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": "'तारीख' प्रकार के माप वर्तमान में समर्थित नहीं हैं",
    'No chart found for type "{{type}}"': '"{{type}}" प्रकार के लिए कोई चार्ट नहीं मिला'
  }
};
var hiIN = (0, _i18n.mergeLocaleObjects)([_components.hiIN, _visualizationsAdapters.hiIN, _visualizationsTable.hiIN, _visualizationsVisx.hiIN], 'hi-IN', resources);
exports.hiIN = hiIN;
//# sourceMappingURL=hi-IN.js.map