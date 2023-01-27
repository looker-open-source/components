"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSeriesMin = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _isNumeric = require("./isNumeric");

var getSeriesMin = function getSeriesMin(seriesName, data) {
  var values = data.map(function (d) {
    var val = d[seriesName];
    return (0, _isNumeric.isNumeric)(val) ? Number(val) : Infinity;
  });
  var minVal = Math.min.apply(Math, (0, _toConsumableArray2["default"])(values));

  return minVal === Infinity ? 0 : minVal;
};
exports.getSeriesMin = getSeriesMin;
//# sourceMappingURL=getSeriesMin.js.map