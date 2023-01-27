"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabularPivotResponse = void 0;
var _ = require(".");

var tabularPivotResponse = function tabularPivotResponse(_ref) {
  var data = _ref.data,
    fields = _ref.fields,
    pivots = _ref.pivots;
  return data.map(function (datum) {
    var formattedDatum = {};
    var dimensionNames = (0, _.getDimensionNames)(fields);
    dimensionNames.forEach(function (dimensionName) {
      return formattedDatum[dimensionName] = datum[dimensionName] && datum[dimensionName].value;
    });
    var measureNames = (0, _.getMeasureNames)(fields);
    measureNames.forEach(function (measureName) {
      var pivotValues = pivots.map(function (pivot) {
        return pivot.key;
      });
      pivotValues.forEach(function (pivotValue) {
        formattedDatum[(0, _.buildPivotMeasureName)({
          measureName: measureName,
          pivotValue: pivotValue
        })] = datum[measureName] && datum[measureName][pivotValue].value;
      });
    });
    return formattedDatum;
  });
};
exports.tabularPivotResponse = tabularPivotResponse;
//# sourceMappingURL=tabularPivotResponse.js.map