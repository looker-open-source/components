"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSeriesMax = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _isNumeric = require("./isNumeric");

var getSeriesMax = function getSeriesMax(seriesName, data) {
  var values = data.map(function (d) {
    var val = d[seriesName];
    return (0, _isNumeric.isNumeric)(val) ? Number(val) : -Infinity;
  });
  var maxVal = Math.max.apply(Math, (0, _toConsumableArray2["default"])(values));

  return maxVal === -Infinity ? 0 : maxVal;
};
exports.getSeriesMax = getSeriesMax;
//# sourceMappingURL=getSeriesMax.js.map