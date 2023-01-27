"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizePivotSeriesKeys = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _ = require(".");

var SEPARATOR = ' - ';
var normalizePivotSeriesKeys = function normalizePivotSeriesKeys(rawConfig) {
  var entries = Object.entries(rawConfig).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      key = _ref2[0],
      val = _ref2[1];
    var pivotPos = key.lastIndexOf(SEPARATOR);
    var measureName = key.substring(pivotPos + SEPARATOR.length);
    var pivotValue = key.substring(0, pivotPos);
    var formattedKey = pivotPos > -1 ? (0, _.buildPivotMeasureName)({
      measureName: measureName,
      pivotValue: pivotValue.replace(/Row Total/, '$$$$$$_row_total_$$$$$$')
    }) : key;
    return [formattedKey, val];
  });
  return Object.fromEntries(entries);
};
exports.normalizePivotSeriesKeys = normalizePivotSeriesKeys;
//# sourceMappingURL=normalizePivotSeriesKeys.js.map