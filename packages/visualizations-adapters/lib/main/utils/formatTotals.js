"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTotals = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _buildPivotMeasureName = require("./buildPivotMeasureName");
var _has = _interopRequireDefault(require("lodash/has"));

var isTotalsValue = function isTotalsValue(obj) {
  return (0, _has["default"])(obj, 'value');
};
var formatTotals = function formatTotals() {
  var totals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var entries = {};
  Object.entries(totals).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      key = _ref2[0],
      obj = _ref2[1];
    if (isTotalsValue(obj)) {
      entries[key] = obj.value;
    } else {
      Object.entries(obj).forEach(function (_ref3) {
        var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
          innerKey = _ref4[0],
          innerObj = _ref4[1];
        var measureName = (0, _buildPivotMeasureName.buildPivotMeasureName)({
          measureName: key,
          pivotValue: innerKey
        });
        entries[measureName] = innerObj.value;
      });
    }
  });
  return entries;
};
exports.formatTotals = formatTotals;
//# sourceMappingURL=formatTotals.js.map