"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildPivotMeasureName = void 0;

var buildPivotMeasureName = function buildPivotMeasureName(_ref) {
  var measureName = _ref.measureName,
    pivotValue = _ref.pivotValue;
  return "".concat(pivotValue, " - ").concat(measureName);
};
exports.buildPivotMeasureName = buildPivotMeasureName;
//# sourceMappingURL=buildPivotMeasureName.js.map