"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateLegend = void 0;
var _map = _interopRequireDefault(require("lodash/map"));
var _get = _interopRequireDefault(require("lodash/get"));
var _ = require(".");

var ENDASH = "\u2013";
var generateLegend = function generateLegend() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _.DEFAULT_EMPTY_FIELDS;
  var config = arguments.length > 1 ? arguments[1] : undefined;
  var defaultDimensionLabel = (0, _map["default"])(fields.dimensions, function (d) {
    return d.label;
  }).join(" ".concat(ENDASH, " "));
  var defaultMeasureLabel = (0, _map["default"])(fields.measures, function (m) {
    return m.label;
  }).join(" ".concat(ENDASH, " "));
  return {
    dimension: (0, _get["default"])(config, 'x_axis_label', defaultDimensionLabel),
    measure: (0, _get["default"])(config, 'y_axes[0].label', defaultMeasureLabel)
  };
};
exports.generateLegend = generateLegend;
//# sourceMappingURL=generateLegend.js.map