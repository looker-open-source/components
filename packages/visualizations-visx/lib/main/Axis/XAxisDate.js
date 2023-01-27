"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XAxisDate = void 0;
var _react = _interopRequireDefault(require("react"));
var _xychart = require("@visx/xychart");

var XAxisDate = function XAxisDate(_ref) {
  var label = _ref.label,
    showTicks = _ref.showTicks;
  return _react["default"].createElement(_xychart.Axis, {
    hideTicks: !showTicks,
    label: label,
    labelOffset: showTicks ? undefined : 0,
    orientation: "bottom",
    tickValues: showTicks ? undefined : []
  });
};
exports.XAxisDate = XAxisDate;
//# sourceMappingURL=XAxisDate.js.map