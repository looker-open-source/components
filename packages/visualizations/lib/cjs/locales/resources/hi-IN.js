"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hiIN = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': 'क्वेरी घटक में कोई चिल्ड्रन पास नहीं हुआ',
    'Query component received both dashboard and query props': 'क्वेरी कंपोनेंट को डैशबोर्ड और क्वेरी प्रॉप्स दोनों प्राप्त हुए'
  },
  QueryError: {
    Error: 'त्रुटि'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": "'दिनांक' प्रकार के माप वर्तमान में समर्थित नहीं हैं",
    'No chart found for type "{{type}}"': '"{{type}}" प्रकार के लिए कोई चार्ट नहीं मिला'
  }
};
var hiIN = {
  locale: 'hi-IN',
  resources: {
    'hi-IN': (0, _merge["default"])({}, resources, _visualizationsAdapters.hiIN.resources['hi-IN'], _visualizationsTable.hiIN.resources['hi-IN'], _visualizationsVisx.hiIN.resources['hi-IN'])
  }
};
exports.hiIN = hiIN;
//# sourceMappingURL=hi-IN.js.map