"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seriesLabelFormatter = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _find = _interopRequireDefault(require("lodash/find"));

var seriesLabelFormatter = function seriesLabelFormatter(fields, config, item) {
  var closestSeries = (0, _visualizationsAdapters.pickSeriesByName)(fields, config, item);
  var field = (0, _find["default"])([].concat((0, _toConsumableArray2["default"])(fields.measures), (0, _toConsumableArray2["default"])(fields.dimensions)), {
    name: item
  });
  var pivoted_label = field && (field === null || field === void 0 ? void 0 : field.pivoted_label);
  var fallback = item.split('.').pop() || '';
  return closestSeries.label || pivoted_label || (field === null || field === void 0 ? void 0 : field.label) || fallback.replace(/_/g, ' ');
};
exports.seriesLabelFormatter = seriesLabelFormatter;
//# sourceMappingURL=seriesLabelFormatter.js.map